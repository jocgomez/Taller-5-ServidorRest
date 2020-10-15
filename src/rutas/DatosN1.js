const {Router} = require('express');
const router = Router();
const id;
router.get('/datos:id', (req,res) => {
res.json([{
    'Identificador': 'Nodo-01',
    'NivelAgua': 100,
    'PrecipitacionLluvia': 20,
    'CaudalAgua': 12,
    'Fecha': '12/10/2020'
    },{
     'Identificador': 'Nodo-01',
    'NivelAgua': 50,
    'PrecipitacionLluvia': 120,
    'CaudalAgua': 12,
    'Fecha': '01/11/2020'
   }]
);
});
router.post('/datos/id', (req,res) => {
console.log(req.body);
res.send("datos recibidos....");
});
module.exports = router;