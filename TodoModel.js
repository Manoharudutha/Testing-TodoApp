// Creating a Model(Database Table) using sequelizer.

/* // Method - 1: Using sequelize.define(ModelName, attributes, options)

const { DataTypes } = require("sequelize");
const { sequelize } = require("./ConnectDB.js");

const Todo = sequelize.define(
  "Todo",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dueDate: {
      type: DataTypes.DATEONLY,
    },
    completed: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
    tableName: "Todo",
  }
);

module.exports = Todo;
Todo.sync();
*/

// Method - 2: By extending Model Class and Calling init(attributes, options) with it - Use thos method most of the models.

const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("./ConnectDB");

class Todo extends Model {
  static async addTodo(params) {
    return await Todo.create(params);
  }
  displayableString() {
    return (
      (this.completed ? "[X] " : "[ ] ") +
      this.id +
      ". " +
      this.title +
      " - " +
      this.dueDate
    );
  }
}

Todo.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dueDate: {
      type: DataTypes.DATEONLY,
    },
    completed: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
    modelName: "Todo",
  }
);

module.exports = Todo;
Todo.sync();
