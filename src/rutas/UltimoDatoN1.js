const {Router} = require('express');
const router = Router();
router.get('/ultimoDatoN1', (req,res) => {
res.json({
    'Identificador': 'Nodo-01',
    'NivelAgua': 100,
    'PrecipitacionLluvia': 20,
    'CaudalAgua': 12,
    'Fecha': '12/10/2020'
    });
});
router.post('/ultimoDatoN1', (req,res) => {
console.log(req.body);
res.send("datos recibidos....");
});
module.exports = router;