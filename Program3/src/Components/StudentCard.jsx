function StudentCard(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>
        <strong>Roll No:</strong> {props.rollno}
      </p>
      <p>
        <strong>Course:</strong> {props.course}
      </p>
      <p>
        <strong>Department:</strong> {props.department}
      </p>
      <p>
        <strong>Email:</strong> {props.email}
      </p>
    </div>
  );
}

export default StudentCard;
