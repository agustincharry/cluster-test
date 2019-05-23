const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    return res.json({ msg: 'Hello from MS2' });
});

app.listen(port, ()=>{
    console.log(`App corriendo en el puerto ${port}`);
});