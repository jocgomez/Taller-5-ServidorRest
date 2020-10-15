const {Router} = require('express');
const router = Router();
router.get('/datos/:id', (req,res) => {
var id=req.params.id; //recogemos el parámetro enviado en la url
switch (id) {
    case '1':
        res.json({
            'Identificador': 'Nodo-01',
            'NivelAgua': 100,
            'PrecipitacionLluvia': 20,
            'CaudalAgua': 12,
            'Fecha': '12/10/2020'
            }
        );        
        break;
    case '2':
        res.json({
             'Identificador': 'Nodo-02',
            'NivelAgua': 50,
            'PrecipitacionLluvia': 120,
            'CaudalAgua': 12,
            'Fecha': '12/10/2020'
           }
        );        
        break;
}
});
router.get('/datos', (req,res) => {
    res.json([{
        'Identificador': 'Nodo-01',
        'NivelAgua': 100,
        'PrecipitacionLluvia': 20,
        'CaudalAgua': 12,
        'Fecha': '12/10/2020'
        },{
         'Identificador': 'Nodo-02',
        'NivelAgua': 50,
        'PrecipitacionLluvia': 120,
        'CaudalAgua': 12,
        'Fecha': '12/10/2020'
       }]
    );
    });
router.get('/ultimoDato/:id', (req,res) => {
    var id=req.params.id;
    switch (id) {
        case '1':
            res.json({
                'Identificador': 'Nodo-01',
                'NivelAgua': 100,
                'PrecipitacionLluvia': 20,
                'CaudalAgua': 12,
                'Fecha': '12/10/2020'
                });            
            break;
        case '2':
            res.json({
                'Identificador': 'Nodo-02',
                'NivelAgua': 50,
                'PrecipitacionLluvia': 120,
                'CaudalAgua': 12,
                'Fecha': '12/10/2020'
                }
            );              
        break;
    }
    
    });
router.post('/datos', (req,res) => {
console.log(req.body);
res.send("datos recibidos....");
});
module.exports = router;