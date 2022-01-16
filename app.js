const express = require("express");

const PORT = process.env.PORT || 3001;
const path = require("path")
const app = express();


app.use(express.static(path.resolve(__dirname, '../front/public')));

app.get("/api", (req, res) => {
  res.json([{ title: "Hello from server!",msg:"Uma mensagem diretamente do server" }
  ,{title:"Outra mensagem",msg:"Node js quem manda"}]);
});
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../front/public', 'index.html'));
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});