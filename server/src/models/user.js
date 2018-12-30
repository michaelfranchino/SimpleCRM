module.exports = (sequelize, DataTypes) =>
  sequelize.define('User', {
    email: {
      type: DataTypes.STRING(60),
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
        notEmpty: true
      }
    },
    password: DataTypes.STRING(20),
    fname: DataTypes.STRING(60),
    lname: DataTypes.STRING(60),
    phone_pri: DataTypes.STRING(20),
    pictureURL: {
      type: DataTypes.STRING(100),
      validate: {
        isUrl: true
      }
    },
    Verified: DataTypes.BOOLEAN,
    VerifiedDateTime: DataTypes.DATE
  })
