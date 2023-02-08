const { DataTypes } = require('sequelize');

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
  },{
    timestamps: false,
    freezeTableName: true
  });
};
