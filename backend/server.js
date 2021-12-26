let express = require('express');

let list = [   
    {"_id":"61c8ba53bd864160e4a30ef7","name":"pepechom","email":"ad","__v":0},
    {"_id":"61c8bb33edb23c661c7f4ceb","name":"aa","email":"ss","__v":0},
    {"_id":"61c8bba24e3f0847707a57b9","name":"create","email":"user","__v":0},
    {"_id":"61c8bbd4664f763fdc43debd","name":"qq","email":"qq","__v":0},
    {"_id":"61c8bcdb219cb36838e43beb","name":"ads","email":"asd","__v":0}
]

const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/list', (req,res,next)=>{
    res.json(list)
})

app.listen(4000);