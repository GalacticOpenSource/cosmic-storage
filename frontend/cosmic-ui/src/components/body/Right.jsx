import React, { useState } from "react";
import { FaFilePdf, FaFileWord, FaFileImage, FaFolder, FaEllipsisV } from "react-icons/fa";
import "./Right.css";

const files = [
  { name: "Resume", type: "doc", reason: "You opened · 19 Sept 2025", owner: "me", location: "My Drive" },
  { name: "IMG_20240605_105315.jpg", type: "img", reason: "You opened · 25 Jun 2025", owner: "me", location: "My Drive" },
  { name: "Your big idea", type: "folder", reason: "You opened · 5 Aug 2025", owner: "me", location: "My Drive" },
  { name: "abcidofvarad.pdf", type: "pdf", reason: "You opened · 21 Dec 2024", owner: "me", location: "My Drive" },
  { name: "Resume", type: "doc", reason: "You opened · 19 Sept 2025", owner: "me", location: "My Drive" },
  { name: "IMG_20240605_105315.jpg", type: "img", reason: "You opened · 25 Jun 2025", owner: "me", location: "My Drive" },
  { name: "Your big idea", type: "folder", reason: "You opened · 5 Aug 2025", owner: "me", location: "My Drive" },
  { name: "abcidofvarad.pdf", type: "pdf", reason: "You opened · 21 Dec 2024", owner: "me", location: "My Drive" },
  { name: "Resume", type: "doc", reason: "You opened · 19 Sept 2025", owner: "me", location: "My Drive" },
  { name: "IMG_20240605_105315.jpg", type: "img", reason: "You opened · 25 Jun 2025", owner: "me", location: "My Drive" },
  { name: "Your big idea", type: "folder", reason: "You opened · 5 Aug 2025", owner: "me", location: "My Drive" },
  { name: "abcidofvarad.pdf", type: "pdf", reason: "You opened · 21 Dec 2024", owner: "me", location: "My Drive" },

{ name: "Resume", type: "doc", reason: "You opened · 19 Sept 2025", owner: "me", location: "My Drive" },
  { name: "IMG_20240605_105315.jpg", type: "img", reason: "You opened · 25 Jun 2025", owner: "me", location: "My Drive" },
  { name: "Your big idea", type: "folder", reason: "You opened · 5 Aug 2025", owner: "me", location: "My Drive" },
  { name: "abcidofvarad.pdf", type: "pdf", reason: "You opened · 21 Dec 2024", owner: "me", location: "My Drive" },

];

function getFileIcon(type) {
  switch (type) {
    case "pdf": return <FaFilePdf style={{ color: "red" }} />;
    case "doc": return <FaFileWord style={{ color: "blue" }} />;
    case "img": return <FaFileImage style={{ color: "green" }} />;
    case "folder": return <FaFolder style={{ color: "goldenrod" }} />;
    default: return <FaFileWord />;
  }
}

function Right() {


  return (
    <>
 
    <div className="drive">

      <table>
     <thead>
  <tr>
    <th>Name</th>
    <th>Reason suggested</th>
    <th>Owner</th>
    <th>Location</th>
    <th>Actions</th>
  </tr>
</thead>
<tbody>
  {files.map((file, index) => (
    <tr key={index}>
      <td>
        <span className="file-icon">{getFileIcon(file.type)}</span>
        <span className="file-name">{file.name}</span>
      </td>
      <td>{file.reason}</td>
      <td>{file.owner}</td>
      <td>{file.location}</td>
      <td>
        {/* 3 dots menu */}

        <span className="menu-icon">⋮</span>
    
      </td>
    </tr>
  ))}
</tbody>

      </table>
      
    </div>
    </>
  );
}

export default Right;
