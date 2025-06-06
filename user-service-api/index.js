const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    const message = `
        <h2>🚧 Test Endpoint</h2>
        <p>This endpoint is working correctly and is currently used for testing purposes only.</p>
    `;
    res.send(message);
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})
