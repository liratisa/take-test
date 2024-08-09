const axios = require("axios");

exports.publicRoute = (req, res) => {
	res.status(200).json("API funcionando!");
};

exports.getRepos = async (req, res) => {
	try {
		const username = req.query.username;

		if (!username) {
			return res.status(400).send("Por favor, informe um username");
		}

		const response = await axios.get(
			`https://api.github.com/users/${username}/repos?per_page=120`,
		);
		const repos = response.data;

		const filteredRepos = repos
			.filter((repo) => repo.language === "C#")
			.sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
			.slice(0, 5)
			.map((repo) => ({
				name: repo.full_name,
				description: repo.description || "Nenhuma descrição informada",
				url: repo.html_url,
				avatar: repo.owner.avatar_url,
			}));

		res.status(200).json(filteredRepos);
	} catch (error) {
		console.error(error);
		res.status(500).send("Ocorreu um erro durante a requisição");
	}
};
