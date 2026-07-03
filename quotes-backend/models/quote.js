// ============================================================
// models/quote.js — Quote model
//
// YOUR TASKS:
//   1. Import DataTypes from 'sequelize'
//   2. Import your db connection
//   3. Define a Quote model with these fields:
//
//      Field    Type      Constraint
//      -------  --------  --------------------
//      text     STRING    allowNull: false  (the quote itself)
//      author   STRING    allowNull: false  (who said it)
//
//      Sequelize adds id, createdAt, and updatedAt automatically.
//      Do not define them yourself.
//
//   4. Export the model
// ============================================================

const { DataTypes } = require('sequelize')
const db = require('../db')

const QuoteModel = db.define('quote', {
    text: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = QuoteModel

//id , createdAt, and updatedAt all come from the database. that automatically
// count whats in the db and as well as updates the latter two with
// timestamps for creation and updates 