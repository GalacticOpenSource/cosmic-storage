import express from 'express'
const app = express()
const port = 3000
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
// app.get("/search", (req, res) => {
//   console.log(req.query.q); // "v"
//   res.send(`You searched for: ${req.query.q}`);
// });
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
app.post("/submit",(req,res) => {
res.send(`"Cosmic Star",
  "Cosmic Galaxy",
  "Cosmic Nebula",
  "Cosmic Dust",
  "Cosmic Explorer",
  "Cosmic Ray",`)
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
