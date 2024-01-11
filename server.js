const express = require('express');
const PORT = process.env.PORT || 3001;
const api = require('./routes/index');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}))
app.use('/api', api);

app.use(express.static('public'));

//GET route for home.html
app,get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

//GET route for notes.html
app.get('/notes', (req, res)=>{
    res.sendFile(path.join(__dirname, '/public/notes.html'))
})

app.listen(PORT, ()=>{
    console.log(`App listening to port ${PORT}`);
})