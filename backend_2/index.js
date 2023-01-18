const express = require('express');
const axios = require('axios');
var bodyParser = require('body-parser');
const app = express();
const port = 8083;
const cors = require('cors');
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get('/res2only', (req, res) => res.send('Response from backend 2'));
app.get('/res2and1', async (req, res)  => {

    var msg = "Message from backend 1 is | ";
    try {
        const response = await axios.get('http://localhost:8080/msg1');
        console.log(response.data);
        msg = msg + response.data;
    } catch (error) {
        console.error(error);
        msg = msg + error;
    }
      
    res.send(msg);
});

app.get('/msg2', (req, res) => res.send('BACKEND 2 CAT'));


app.listen(port, () => console.log(`Example app listening on port ${port}!`))