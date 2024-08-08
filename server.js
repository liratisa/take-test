const express = require("express");
const app = express();
const repoRoutes = require("./routes/repoRoutes");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", repoRoutes);

const PORT = 3070;

app.listen(PORT, () => {
	console.log(`Aplicação rodando na porta ${PORT}!`);
});
