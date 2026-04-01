const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static assets from ../public
app.use(express.static(path.join(__dirname, "..", "public")));

// In-memory posts array
const posts = [
  {
    id: 1,
    title: "Benvenuto al mio blog",
    content: "Questo è il primo post del blog.",
    image: "/images/post1.svg",
    tags: ["intro", "benvenuto"],
  },
  {
    id: 2,
    title: "Secondo post",
    content: "Un piccolo aggiornamento sul progetto.",
    image: "/images/post2.svg",
    tags: ["aggiornamento"],
  },
  {
    id: 3,
    title: "Consigli di sviluppo",
    content: "Alcuni consigli utili per Node.js ed Express.",
    image: "/images/post3.svg",
    tags: ["node", "express", "consigli"],
  },
  {
    id: 4,
    title: "Immagini e asset statici",
    content: "Vediamo come servire le immagini con Express.",
    image: "/images/post4.svg",
    tags: ["static", "assets"],
  },
  {
    id: 5,
    title: "Ultime novità",
    content: "Piccole novità nel blog e roadmap.",
    image: "/images/post5.svg",
    tags: ["news", "roadmap"],
  },
];

app.get("/", (req, res) => {
  res.type("text").send("Server del mio blog");
});

app.get("/bacheca", (req, res) => {
  res.json({ posts });
});

app.get("/post/:id", (req, res) => {
  const id = Number(req.params.id);
  const p = posts.find((x) => x.id === id);
  if (!p) return res.status(404).json({ error: "Post non trovato" });
  res.json(p);
});

app.listen(PORT, () => {
  console.log(`Server in ascolto su http://localhost:${PORT}`);
});
