const { continueSession } = require("pg/lib/sasl.js");
const { connect } = require("./ConnectDB.js");
const Todo = require("./TodoModel.js");

// Inserting the todos(records) to TodoModel(Table).
const createTodo = async () => {
  try {
    await connect();
    const todo = await Todo.addTodo({
      title: "Third Todo",
      dueDate: new Date(),
      completed: false,
    });
    console.log("Created a Todo with ID: " + todo.id);
  } catch (error) {
    console.error(error);
  }
};

// Counting no. of todos(Records) in TodoModel.
const countItems = async () => {
  try {
    const totalItems = await Todo.count();
    console.log("Found " + totalItems + " items in the table!");
  } catch (error) {
    console.error(error);
  }
};

// Retrieving multiple Todos(Records) from TodoModel(Table).
const getAllTodos = async () => {
  try {
    const todos = await Todo.findAll({
      //   where: {
      //     completed: false,
      //   },
      order: [["title", "DESC"]],
    });
    const todoString = todos.map((todo) => todo.displayableString()).join("\n");
    console.log(todoString);
  } catch (error) {
    console.error(error);
  }
};

// Retrieving Single Todo(record) from TodoModel(Table).
const getSingleTodo = async (id) => {
  try {
    const todo = await Todo.findOne({
      where: {
        id: id,
      },
      order: [["id", "ASC"]],
    });
    console.log(todo.displayableString());
  } catch (error) {
    console.error(error);
  }
};

// Update inserted todos(Records) in the TodoModel(Table).
const updateItem = async (ide) => {
  try {
    await Todo.update(
      { completed: false, dueDate: "2021-09-16" },
      {
        where: {
          id: ide,
        },
      }
    );
    console.log("Todos After Updation: \n");
  } catch (error) {
    console.error(error);
  }
};

// Delete a Todo(Record) from TodoModel(Table).
const deleteItem = async (id) => {
  try {
    const deletedItemsCount = await Todo.destroy({
      where: { id: id },
    });
    console.log("\nDeleted " + deletedItemsCount + " Items!");
  } catch (error) {
    console.error(error);
  }
};

(async () => {
  //   await createTodo();
  //   await countItems();
  await getAllTodos();
  //   await getSingleTodo(4);
  await deleteItem(6);
  await getAllTodos();
})();
