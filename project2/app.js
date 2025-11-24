const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server CRUD API Fauzan Teknologi berjalan! Gunakan /infos untuk melihat data.");
});

// Data dummy Project 1
let infos = [
  { id: 1, title: "AI di Tahun 2025", content: "Artificial Intelligence berkembang pesat..." },
  { id: 2, title: "Perkembangan Software Development", content: "Framework baru terus bermunculan..." },
  { id: 3, title: "Cyber Security 2025", content: "Keamanan digital menjadi fokus utama..." }
];

// READ all
app.get("/infos", (req, res) => {
  res.json(infos);
});

// READ by ID
app.get("/infos/:id", (req, res) => {
  const info = infos.find(i => i.id == req.params.id);
  if(info) res.json(info);
  else res.status(404).json({message: "Not found"});
});

// CREATE
app.post("/infos", (req, res) => {
  const newInfo = { id: infos.length+1, ...req.body };
  infos.push(newInfo);
  res.status(201).json(newInfo);
});

// UPDATE
app.put("/infos/:id", (req, res) => {
  const index = infos.findIndex(i => i.id == req.params.id);
  if(index !== -1){
    infos[index] = { id: infos[index].id, ...req.body };
    res.json(infos[index]);
  } else res.status(404).json({message: "Not found"});
});

// DELETE
app.delete("/infos/:id", (req, res) => {
  const index = infos.findIndex(i => i.id == req.params.id);
  if(index !== -1){
    const deleted = infos.splice(index,1);
    res.json(deleted[0]);
  } else res.status(404).json({message: "Not found"});
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
