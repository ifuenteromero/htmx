const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = 3000;
const BASE_URL = process.env.BASE_URL;

app.use(express.json());

app.get('/', (req, res) => {
	res.send('Bienvenido a tu API personalizada de películas.');
});

app.get('/movies/:title', async (req, res) => {
	const { title } = req.params;
	try {
		const endpoint = `${BASE_URL}/search?q=${title}`;
		const response = await axios.get(endpoint);

		const movies = response.data.description.map(movie => ({
			id: movie['#IMDB_ID'],
			title: movie['#TITLE'],
			year: movie['#YEAR'],
			poster: movie['#IMG_POSTER'],
			actors: movie['#ACTORS'],
			rank: movie['#RANK'],
		}));

		res.json(movies);
	} catch (error) {
		res.status(500).json({
			error: 'Error al obtener datos de la API externa',
		});
	}
});

// Iniciar el servidor // node server.js
app.listen(PORT, () => {
	console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

app.post('/movies', async (req, res) => {
	const { search } = req.body;
	try {
		const endpoint = `${BASE_URL}/search?q=${search}`;
		const response = await axios.get(endpoint);

		const movies = response.data.description.map(movie => ({
			id: movie['#IMDB_ID'],
			title: movie['#TITLE'],
			year: movie['#YEAR'],
			poster: movie['#IMG_POSTER'],
			actors: movie['#ACTORS'],
			rank: movie['#RANK'],
		}));

		res.json(movies);
	} catch (error) {
		res.status(500).json({
			error: 'Error al obtener datos de la API externa',
		});
	}
});
