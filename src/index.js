const express  = require ('express');
const api = express();
const router = require('./routes/route');
const cors = require('cors');
const { json } = require('express');
const { get } = require('./routes/route');

//middlewares
api.use(express.json());
api.use(express.urlencoded({extended:false}));


api.use((req, res, next) => {
     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
     res.setHeader('Access-Control-Allow-Headers', '*');
  next();
  });


//Defino las rutas
api.use(router);
  api.get('/*',function (req, res, next) {
    res.json({msg: 'This is CORS-enabled'});

});
 
// Configurar cabeceras y cors
// const PORT = 3000;

const PORT = process.env.PORT || 3000;

api.listen(PORT);
console.log('Server on port: http://localhost:3000');
