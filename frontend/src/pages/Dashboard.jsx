import { useEffect, useState } from "react";
import API from "../services/api";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addTask = async () => {
    try {
      if (!title.trim()) return;

      await API.post("/tasks", {
        title,
      });

      setTitle("");
      fetchTasks();
    } catch (err) {
      console.log("ADD ERROR:", err.response?.data || err.message);
      alert("Task creation failed");
    }
  };

  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (err) {
      console.log(err);
    }
  };

  const startEdit = (task) => {
    setEditingId(task._id);
    setEditTitle(task.title);
  };

  const updateTask = async (id) => {
    try {
      await API.put(`/tasks/${id}`, {
        title: editTitle,
      });

      setEditingId(null);
      setEditTitle("");
      fetchTasks();
    } catch (err) {
      console.log("UPDATE ERROR:", err.response?.data || err.message);
      alert("Task update failed");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Task Dashboard 🚀</h1>

      <div style={styles.inputBox}>
        <input
          style={styles.input}
          placeholder="Enter task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button style={styles.addBtn} onClick={addTask}>
          Add Task
        </button>
      </div>

      <div style={styles.list}>
        {tasks.length === 0 ? (
          <p>No tasks found</p>
        ) : (
          tasks.map((task) => (
            <div key={task._id} style={styles.card}>
              {editingId === task._id ? (
                <>
                  <input
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    style={styles.editInput}
                  />

                  <button
                    style={styles.saveBtn}
                    onClick={() => updateTask(task._id)}
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <span>{task.title}</span>

                  <div>
                    <button
                      style={styles.editBtn}
                      onClick={() => startEdit(task)}
                    >
                      ✏️
                    </button>

                    <button
                      style={styles.deleteBtn}
                      onClick={() => deleteTask(task._id)}
                    >
                      ❌
                    </button>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    fontFamily: "Arial"
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px"
  },
  inputBox: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "30px"
  },
  input: {
    padding: "10px",
    width: "250px"
  },
  addBtn: {
    padding: "10px 15px",
    cursor: "pointer",
    background: "#4CAF50",
    color: "white",
    border: "none"
  },
  list: {
    maxWidth: "500px",
    margin: "auto"
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    marginBottom: "10px",
    background: "#f4f4f4"
  },
  editInput: {
    padding: "8px",
    flex: 1,
    marginRight: "10px"
  },
  editBtn: {
    border: "none",
    cursor: "pointer",
    background: "#2196F3",
    color: "white",
    padding: "5px 10px",
    marginRight: "5px"
  },
  saveBtn: {
    border: "none",
    cursor: "pointer",
    background: "#4CAF50",
    color: "white",
    padding: "5px 10px"
  },
  deleteBtn: {
    border: "none",
    cursor: "pointer",
    background: "red",
    color: "white",
    padding: "5px 10px"
  }
};