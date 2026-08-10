import "./App.css";
import { useState } from "react";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const students = [
    { id: 1, name: "Ankita", course: "ReactJS" },
    { id: 2, name: "Mayuri", course: "Python" },
    { id: 3, name: "Shravni", course: "Java" },
    { id: 4, name: "Anshu", course: "Data Science" },
    { id: 5, name: "Sonali", course: "Machine Learning" },
  ];
  return (
    <div className="container">
      <h1>Conditional Rendering and Dynamic List</h1>
      <button onClick={() => setLoggedIn(!loggedIn)}>
        {loggedIn ? "Logout" : "Login"}
      </button>
      <br />

      <br />

      {/* Conditional Rendering */}
      {loggedIn ? (
        <div className="welcome">
          <h2>Welcome User!</h2>
          <p>You are successfully logged in.</p>
        </div>
      ) : (
        <div className="login">
          <h2>Please Login</h2>
          <p>Click the button above to login.</p>
        </div>
      )}
      <hr />
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <strong>{student.name}</strong> - {student.course}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
