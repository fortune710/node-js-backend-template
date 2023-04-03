const { Sequelize } = require('sequelize');


const sequelize = new Sequelize({
    database: "",
    username: "",
    password: "",
    host: ""
})

sequelize.authenticate();

module.exports = {
    sequelize: sequelize
}