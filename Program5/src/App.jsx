import { useState } from "react";
import "./App.css";
function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    message: "",
    agree: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Form Submitted Successfully!");
  };

  return (
    <div className="container">
      <h1>Student Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
        <label>Course</label>
        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
          className="course"
        >
          <option value="">Select Course</option>
          <option value="BCA">BCA</option>
          <option value="BSc">BSc</option>
          <option value="MCA">MCA</option>

          <option value="MSc">MSc</option>
        </select>
        <label>Message</label>
        <textarea
          name="message"
          placeholder="Write something..."
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <div className="checkbox">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
          <span>I agree to the terms and conditions</span>
        </div>
        <button type="submit">Submit</button>
      </form>

      <div className="output">
        <h2>Captured User Input</h2>
        <p>
          <strong>Name:</strong> {formData.name}
        </p>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
        <p>
          <strong>Course:</strong> {formData.course}
        </p>
        <p>
          <strong>Message:</strong> {formData.message}
        </p>
        <p>
          <strong>Agreement:</strong> {formData.agree ? "Yes" : "No"}
        </p>
      </div>
    </div>
  );
}

export default App;
