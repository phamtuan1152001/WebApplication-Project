const jwt = require("jsonwebtoken");
const db = require("../../app/Models");
const User = require('../../app/Models/LoginModel')
const Role = require('../../app/Models/Role')

const { JWT_SECRET } = require('../../config/index')

verifyToken = (req, res, next) => {
    let token = req.header("Authorization");
    //console.log(token)

    if (!token) {
      return res.status(403).send({ message: "No token provided!" });
    }
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
          return res.status(401).send({ message: "Unauthorized!" });
        }
        req.userId = decoded.sub;
        next();
      });
  };

isAdmin = (req, res, next) => {
    User.findById(req.userId).exec((err, user) => {
        if (err) {
            res.status(500).send({
                message: err
            })
            return
        }
        Role.find({
            _id: {
                $in: user.roles[0]
            }
        }, (err, roles) => {
            if (err) {
                res.status(500).send({
                    message: err
                })
                return
            }
            if (roles[0].name === "admin"){
                next()
                return
            }

            res.status(403).send({
                message: "Require admin role!!"
            })
            return
        })
    })
}

const auth = {
    isAdmin,
    verifyToken
}

module.exports = auth