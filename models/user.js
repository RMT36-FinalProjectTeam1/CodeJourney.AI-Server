'use strict';
const {
  Model
} = require('sequelize');
const bcryptHashPass = require('../helpers/bcryptHashPass');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Username field cannot be empty"
        },
        notNull: {
          msg: "Username field cannot be empty"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: "Email field cannot be empty"
        },
        notNull: {
          msg: "Email field cannot be empty"
        },
        isEmail: {
          msg: "Invalid email format"
        },
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Password field cannot be empty"
        },
        notNull: {
          msg: "Password field cannot be empty"
        },
        len: {
          args: [5],
          msg: "Password must be at least 5 characters long."
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: (user, options) => {
        user.password = bcryptHashPass(user.password)
      },
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};