const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
app.use(cors());
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json());

app.get('/terrains', (req, res) => {     
    const datas = [{
    id: 1,
    title: 'BORDEAUX - TINTIN',
    status: 'acheté',
    description: 'Allée des Serres, Bordeaux',
    prix: 5000000,
    surface: 3200, 
    surface_de_plancher: 3050,
    parcelle_cad: 6,
    promesse: '4/4',
    date: 'Démarrage travaux le 24 janv. 2020',
    programmes: 2,
    lots: 70,
    tags: ['social', 'Copromotion']
    
    },
    {
        id: 2,
        title: 'BORDEAUX',
        status: 'Non abouti',
        description: 'Allée des Serres, Bordeaux',
        prix: 1050000,
        surface: 500, 
        surface_de_plancher: 450,
        parcelle_cad: 4,
        promesse: '2/4',
        date: 'aucune prochaine échéance',
        programmes: 1,
        lots: 50,
        tags: []
        
        },
        {
            id: 3,
            title: 'MERIGNACO',
            status: 'acheté',
            description: 'Allée des Serres, Bordeaux',
            prix: 1050000,
            surface: 340, 
            surface_de_plancher: 200,
            parcelle_cad: 3,
            promesse: '3/3',
            date: 'Démarrage travaux le 24 janv. 2020',
            programmes: 1,
            lots: 30,
            tags: ['Social']
            
            },
            {
                id: 4,
                title: 'LEOGNAN',
                status: 'Promesse signée',
                description: 'Allée des Serres, Bordeaux',
                prix: 1050000,
                surface: 500, 
                surface_de_plancher: 240,
                parcelle_cad: 6,
                promesse: '6/6',
                date: "Comité d'engagement le 24 janv. 2020",
                programmes: 1,
                lots: 30,
                tags: ['Social']
                
            },
            {
                id: 5,
                title: 'LEOGNAN',
                status: 'Promesse signée',
                description: 'Allée des Serres, Bordeaux',
                prix: 1050000,
                surface: 40, 
                surface_de_plancher: 28,
                parcelle_cad: 1,
                promesse: '0/6',
                date: "Comité d'engagement le 24 janv. 2020",
                programmes: 1,
                lots: 20,
                //tags: ['Social']
                
            }
        ]

    res.status(200).send(datas);
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});