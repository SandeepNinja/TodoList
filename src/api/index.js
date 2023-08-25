// get Tasks from server
export const getTodos = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const json = await response.json();
    return json;
  } catch (error) {
    console.log("server not connected", error);
  }
};

// add new task to server
export const addTaskToServer = async (body) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const json = await response.json();
    console.log("addTaskToServer api :", json);
    return json;
  } catch (error) {
    console.log("error in adding task to server", error);
  }
};

// update title of the tasks
export const updateTask = async (id, title) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          title,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const json = await response.json();
    console.log("updatedTaskToServer api :", json);
    return json;
  } catch (error) {
    console.log("updatedTaskToServer api error :", error);
  }
};

// update completed status of the task by toggle checkbox
export const updateTaskStatus = async (id, completed) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          completed,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const json = await response.json();
    console.log("updatedTaskStatusToServer api :", json);
    return json;
  } catch (error) {
    console.log("updatedTaskToServer api error :", error);
  }
};

// delete a task
export const deleteTask = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  });
  console.log("task id deleted from the server");
};
