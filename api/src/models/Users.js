const { DataTypes,Sequelize} = require('sequelize');
const bcrypt = require('bcrypt');

 
module.exports = (sequelize) => {
  sequelize.define('users', {
    id:{
      type: DataTypes.UUID ,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      unique: true,
     },
     name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
          notEmpty: true,
          len: [1,255]
        },
   

      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        },
      
      },
         

  },{
    hooks: {
      beforeCreate: (Users) => {
        const salt = bcrypt.genSaltSync();
        Users.password = bcrypt.hashSync(Users.password, salt);
      }
    },
    instanceMethods: {
      validPassword: function(password) {
        return bcrypt.compareSync(password, this.password);
      }
    } ,
    timestamps: false,
    freezeTableName: true   
  });




}