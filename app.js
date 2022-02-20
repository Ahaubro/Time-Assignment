const express = require("express");
const app = express();


app.use(express.json());
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

const PORT = process.env.PORT||8888

app.listen(PORT, (error) => {
    console.log("Sever running on: " + PORT);
});