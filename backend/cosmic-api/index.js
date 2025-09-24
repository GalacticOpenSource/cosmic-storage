import express from 'express'
import multer from "multer";
import fs from "fs";
import path from "path";
const app = express()
const port = 3000
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // save in "uploads/" folder
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  }
});

const upload = multer({ storage });
app.use("/uploads", express.static("uploads"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");


  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

app.get("/",(req,res)=>{

res.status(201).json({ message: "Created successfully!" });
 

})
app.get("/files", (req, res) => {
  const dirPath = path.join(process.cwd(), "uploads");

  fs.readdir(dirPath, (err, files) => {
    if (err) return res.status(500).json({ error: "Unable to scan files" });

    // remove timestamp prefix
    const cleanedFiles = files.map(f => {
      const parts = f.split("-");      // ["1727192048", "cat.png"]
      parts.shift();                    // remove timestamp
      return parts.join("-");           // "cat.png"
    });

    res.json(cleanedFiles);
  });
});
const cosmicData = [
  "Cosmic Star",
  "Cosmic Galaxy",
  "Cosmic Nebula",
  "Cosmic Dust",
  "Cosmic Explorer",
  "Cosmic Ray",
];

app.get("/search", (req, res) => {
  const query = req.query.q || "";
  console.log("Search query:", query)
  res.json({  query }); // Send JSON object
});
app.post("/uploads", upload.array("user-input", 100), (req, res) => {
  console.log(req.files); // array of uploaded files
  res.json({
    message: "Files uploaded!",
    files: req.files.map(f => ({
      originalname: f.originalname,
      filename: f.filename,
      url: `http://localhost:3000/uploads/${f.filename}`
    }))
  });
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
