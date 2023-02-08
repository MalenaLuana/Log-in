const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('note', {
   
      title: {
        type: DataTypes.STRING,
        allowNull: false,
   
      },
      content:{
        type: DataTypes.STRING,
        allowNull: false,
      }
    },{
      timestamps: false,
      freezeTableName: true
    });
  };