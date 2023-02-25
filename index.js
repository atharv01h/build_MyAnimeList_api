require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.get('/anime/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const response = await axios.get(`https://api.jikan.moe/v3/anime/${id}`);
        const anime = response.data;

        res.json(anime);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
