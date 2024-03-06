const express = require('express');

const app = express();


app.get('/api/test', (req, res) => {
    res.status(200).send("Response data send");
})

app.listen(3000, () => {
    console.log("Express server is listen on port 3000");
})