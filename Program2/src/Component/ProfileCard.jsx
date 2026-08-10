function ProfileCard(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.name} />
      <h2>{props.name}</h2>
      <p>
        <strong>Course:</strong> {props.course}
      </p>
      <p>
        <strong>College:</strong> {props.college}
      </p>
    </div>
  );
}
export default ProfileCard;
