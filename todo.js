const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    const formattedDate = (d) => {
      return d.toISOString().split("T")[0];
    };

    var dateToday = new Date();
    const yesterday = formattedDate(
      new Date(new Date().setDate(dateToday.getDate() - 1))
    );

    return all.filter((x) => {
      if (x.dueDate == yesterday) return true;
      else return false;
    });
  };

  const dueToday = () => {
    const formattedDate = (d) => {
      return d.toISOString().split("T")[0];
    };

    var dateToday = new Date();
    const today = formattedDate(dateToday);

    let arr = all.filter((x) => {
      if (x.dueDate == today) return true;
      else return false;
    });
    return arr;
  };

  const dueLater = () => {
    const formattedDate = (d) => {
      return d.toISOString().split("T")[0];
    };

    var dateToday = new Date();
    const tomorrow = formattedDate(
      new Date(new Date().setDate(dateToday.getDate() + 1))
    );

    return all.filter((x) => {
      if (x.dueDate == tomorrow) return true;
      else return false;
    });
  };

  const toDisplayableList = (list) => {
    const formattedDate = (d) => {
      return d.toISOString().split("T")[0];
    };

    var dateToday = new Date();
    const today = formattedDate(dateToday);

    let flag = list[0].dueDate == today ? true : false;
    const strArr = list.map((x) => {
      if (flag == true) {
        if (x.completed == true) return "[x] " + x.title;
        else return "[ ] " + x.title;
      } else {
        if (x.completed == true) return "[x] " + x.title + " " + x.dueDate;
        else return "[ ] " + x.title + " " + x.dueDate;
      }
    });

    let str = strArr.join("\n");

    return str;
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;

/*
  const todos = todoList();
  
  const formattedDate = (d) => {
    return d.toISOString().split("T")[0];
  };
  
  var dateToday = new Date();
  const today = formattedDate(dateToday);
  const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
  );
  const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
  );
  
  todos.add({ title: "Submit assignment", dueDate: yesterday, completed: false });
  todos.add({ title: "Pay rent", dueDate: today, completed: true });
  todos.add({ title: "Service Vehicle", dueDate: today, completed: false });
  todos.add({ title: "File taxes", dueDate: tomorrow, completed: false });
  todos.add({ title: "Pay electric bill", dueDate: tomorrow, completed: false });
  
  console.log("My Todo-list\n\n");
  
  console.log("Overdue");
  var overdues = todos.overdue();
  var formattedOverdues = todos.toDisplayableList(overdues);
  console.log(formattedOverdues);
  console.log("\n\n");
  
  console.log("Due Today");
  let itemsDueToday = todos.dueToday();
  let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday);
  console.log(formattedItemsDueToday);
  console.log("\n\n");
  
  console.log("Due Later");
  let itemsDueLater = todos.dueLater();
  let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater);
  console.log(formattedItemsDueLater);
  console.log("\n\n");
  */
