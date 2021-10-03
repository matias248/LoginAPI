const User = require('../models/user');
const jwt = require('jsonwebtoken');


exports.getUsers = (req,res,next) => {
    User.find({}, function(err, users) {
        var userMap = {};
        var i=0;
        users.forEach(function(user) {
            userMap[i++] = user;
        });
        res.send(userMap);  
        });
};

exports.createUser = (req,res,next) => {
    const user = new User({
        ...req.body
    });
    user.save()
    .then(() => res.status(201).json({message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
};



exports.login = (req, res, next) => {
  User.findOne({ user: req.body.user })
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      if(req.body.password !== user.password){
        return res.status(401).json({ error: 'Mot de passe incorrect !' });
      }
        
        res.status(200).json({
          userId: user._id,
          token: jwt.sign(
            { userId: user._id },
            'RANDOM_TOKEN_SECRET',
            { expiresIn: '24h' }
          )
        }
      );
  });
};