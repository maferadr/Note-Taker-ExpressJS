const router = require('express').Router();
const fs = require('fs');
const path = require('path')

router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../db/db.json'))
});

//Fs library to read and response to send back a response => Add it on the db.json file
router.post('/', (req, res)=>{
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf-8', (err, data)=>{
        if(err){
            console.error(err)
            res.json(err)
        }else{
            let parseData = JSON.parse(data)
            res.json(parseData)
            parseData.push(req.body)

            fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(parseData), (err)=>{
                if(err){
                    res.send(err)
                }else{
                    res.send('Successfully created')
                }
            })
        }
    })
});

router.delete('/', (req, res)=>{
    res.send('Delete Request has been called')
})

module.exports = router;