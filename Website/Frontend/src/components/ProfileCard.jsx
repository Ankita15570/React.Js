function ProfileCard(props) {
  return (
    <div className="profile-small-card">
      <img src={props.image} alt={props.name} />
      <h4>{props.name}</h4>
      <p>{props.course}</p>
      <span>{props.college}</span>
    </div>
  );
}
export default ProfileCard;
