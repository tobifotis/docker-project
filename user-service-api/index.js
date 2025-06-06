const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const data = [{
        name: 'Cristiano Ronaldo',
        Position: 'Striker',
        Status: 'Goat'
    }];
    res.send(`<pre>${JSON.stringify(data, null, 2)}</pre>`);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})
