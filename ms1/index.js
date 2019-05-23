const express = require('express');
const request = require('request');
const app = express();
const port = 4000;

app.get('/', async (req, res) => {
    return res.json({ msg: 'Hello from MS1' });
});

app.get('/consultMS2', async (req, res) => {
    try{
        request.get('http://ms2', function (error, response, body) {
            if(error){
                return res.send(error);
            }
            return res.json(JSON.parse(body));
        });
    }
    catch(err){
        return res.send(err);
    }
});

app.listen(port, ()=>{
    console.log(`App corriendo en el puerto ${port}`);
});