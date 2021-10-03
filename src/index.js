const express = require('express');
const { json } = require('express/lib/response');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const path = require('path');

//database
const uri = "mongodb+srv://Matias:Matias@cluster0.ewa7i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect( uri ,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));



//settings
app.set('port',process.env.PORT || 3000);
app.set('json spaces',2);
//middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json());






//routes
app.use('/',userRoutes);

//starting the server
app.listen(app.get('port'),() =>{
   console.log('Server on port '+app.get('port')); 
});

