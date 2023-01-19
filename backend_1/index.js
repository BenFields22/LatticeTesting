const express = require('express');
const axios = require('axios');
var bodyParser = require('body-parser');
const app = express();
const port = 8080;
const cors = require('cors');
app.use(cors({
	origin: 'http://lattice-lb-639794587.us-west-2.elb.amazonaws.com'
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get('/res1only', (req, res) => res.send('Response from backend 1'));
app.get('/res1and2', async (req, res)  => {

    var msg = "Message from backend 2 is | "
    try {
        const response = await axios.get('http://backend-2-09f96317af092bcd5.7d67968.vpc-lattice-svcs.us-west-2.on.aws/msg2');
        console.log(response.data);
        msg = msg + response.data;
    } catch (error) {
        console.error(error);
        msg = msg + error;
    }
      
    res.send(msg);
});

app.get('/msg1', (req, res) => res.send('BACKEND 1 DOG'));


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
