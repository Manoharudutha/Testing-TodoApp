/* eslint-disable no-undef */
const todoList = require("../todo");
const {
  all,
  add,
  markAsComplete,
  overdue,
  dueToday,
  dueLater,
  toDisplayableList,
} = todoList();

describe("Todo Application Test Suite", () => {
  beforeAll(() => {
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

    add({ title: "Todo Application Test", dueDate: today, completed: false });
    add({ title: "Submit assignment", dueDate: yesterday, completed: false });
    add({ title: "Pay rent", dueDate: today, completed: true });
    add({ title: "Service Vehicle", dueDate: today, completed: false });
    add({ title: "File taxes", dueDate: tomorrow, completed: false });
    add({ title: "Pay electric bill", dueDate: tomorrow, completed: false });
  });

  test("Should add a new item", () => {
    const todosCounts = all.length;
    add({
      title: "wants to submit book in library",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(todosCounts + 1);
  });

  test("Should update a completed(mark as read) of given item", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("Should retrieve a overdue items", () => {
    let overDueItems = null;
    expect(overDueItems).toBe(null);
    overDueItems = overdue();
    expect(typeof overDueItems).toBe("object");
  });

  test("Should retrieve a due today items", () => {
    let dueTodayItems = null;
    expect(dueTodayItems).toBe(null);
    dueTodayItems = dueToday();
    expect(typeof dueTodayItems).toBe("object");
  });

  test("Should retrieve a due later items", () => {
    let dueLaterItems = null;
    expect(dueLaterItems).toBe(null);
    dueLaterItems = dueLater();
    expect(typeof dueLaterItems).toBe("object");
  });
});
