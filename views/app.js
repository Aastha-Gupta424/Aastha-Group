var express = require("express"),
    app = express(),
    port = 3000;


app.get('/', (req, res) => {
    res.send('Hello World!')
});



app.listen(port, function () {
    console.log("Server is running");
});