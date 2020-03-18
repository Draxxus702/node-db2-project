const express = require('express')

const db = require('../data/config')

const router = express.Router()


router.get('/', (req,res) => {
    db('cars')
    .then(param => {
        res.json(param)
    })
    .catch(err => {
        res.status(500).json({errorMessage: 'i could not find your cars'})
    })
})


router.get('/:id', (req,res) => {
    const {id} = req.params

    db('cars')
        .where({id})
        .first()
        .then(param =>{
            res.json(param)
        })
        .catch(err =>{
            res.status(500).json({errorMessage: 'i could not find your car'})
        })
})


router.post('/', (req,res) => {
    const body = req.body
    db('cars')
        .insert(body, 'id')
        .then(param => {
            db('cars')
                .where({ id: param[0] })
                .then(newEntry =>{
                    res.status(201).json(newEntry)
                })
                .catch(err => {
                    res.status(500).json({errorMessage: 'did not enter the data'})
                })
        })
        .catch(err =>{
            res.status(500).json({errorMessage: ' cant wait for this error'})
        })
})


// router.post("/", (req, res) => {
//     const carsData = req.body;
//     db("cars")
//         .insert(carsData, "id")
//         .then(ids => {
//             db("cars")
//                 .where({ id: ids[0] })
//                 .then(newcarsEntry => {
//                     res.status(201).json(newcarsEntry);
//                 });
//         })
//         .catch(err => {
//             console.log("POST error", err);
//             res.status(500).json({ message: "Failed to store data" });
//         });
// });



router.delete('/:id', (req,res) =>{
    db('cars')
    .where({id: req.params.id})
    .del()
    .then(count =>{
        if(count > 0){
            res.status(200).json({message: 'this has been deleted'})
        } else{
            res.status(404).json({message: "sorry you did not delte this"})
        }
    })
    .catch(err =>{
        res.status(500).json({errorMessage: 'the neverending error messages'})
    })
})

module.exports = router