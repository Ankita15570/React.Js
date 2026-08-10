import StudentCard from "./Components/StudentCard";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Sadguru Gadage Maharaj College Karad</h1>
      <StudentCard
        name="Ankita Patil"
        rollno="101"
        course="BCA"
        department="Computer Science"
        email="ankitapatil@gmail.com"
      />
      <StudentCard
        name="Mayuri Kumbhar"
        rollno="102"
        course="BCS"
        department="Computer Science"
        email="mayurikumbhar@gmail.com"
      />
      <StudentCard
        name="Shravani Patil"
        rollno="103"
        course="MCA"
        department="Information Technology"
        email="shravanipatil@gmail.com"
      />
    </div>
  );
}

export default App;
