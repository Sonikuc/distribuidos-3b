//require("dotenv").config;
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// Variable de entorno con la conexión a la base de datos
const uriEnv = 'mongodb://api-mongodb.pj-dasuarez-19.svc.cluster.local:27017/mongodb';
//const uriEnv = process.env.DB_NAME+'://'+process.env.APP_NAME+'-'+process.env.DB_NAME+'.'+process.env.PROJECT_NAME+'.svc:27017/'+process.env.DB_NAME;
// Variable local que se usa para la conexión
var uri = uriEnv;

// Declare a variable named option and assign optional settings
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// Connect MongoDB Local using mongoose connect method
mongoose.connect(uri, options).then(() => {
    console.log("Database connection established!");
},
    err => {
        {
            console.log("Error connecting Database instance due to:", err);
        }
    });

module.exports = mongoose;