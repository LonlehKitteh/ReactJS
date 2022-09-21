const express = require('express')
const app = express()

const data = []

app.get('/data', (req, res) => {
    data.map(e => e?.location)
});

app.post('/data', (req, res) => {
    res.send('test')
})

const port = 3000;

app.listen(port, () => console.log(`Server running on port ${port}`))