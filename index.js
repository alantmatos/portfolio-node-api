const fs = require('fs/promises');
const express = require('express');
const cors = require('cors');
const _ = require('lodash');
const { v4: uuid } = require('uuid');
const Project = require('./data/projects.json');



const app = express();

app.use(cors({
    origin: '*'
}));

app.get('/projects', (req,res) => {
    res.send(Project);
})


app.listen(3000, () => console.log("Api is running..."));