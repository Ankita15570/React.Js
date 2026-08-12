import { useParams } from "react-router-dom";
import ProfileCard from "./ProfileCard.jsx";

function User() {
  const { id } = useParams();
  return (
    <div className="user-page">
      <div className="user-hero">
        <h2>👥 Our Members</h2>
        <p></p>
      </div>
      <div className="container">
        <ProfileCard
          name="Ankita Patil"
          course="BCA Student"
          college="SGM College"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaoIOQPL3VwbDrtdAyAXnCTULzepJzUuc6T4lPp-vX7A&s=10"
        />
        <ProfileCard
          name="Mayuri Kumbhar"
          course="MCA Student"
          college="SGM University"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaoIOQPL3VwbDrtdAyAXnCTULzepJzUuc6T4lPp-vX7A&s=10"
        />
        <ProfileCard
          name="Shravani Patil"
          course="BCS Student"
          college="SGM College"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaoIOQPL3VwbDrtdAyAXnCTULzepJzUuc6T4lPp-vX7A&s=10"
        />
        <ProfileCard
          name="Priya Jadhav"
          course="BSC Student"
          college="SGM College"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaoIOQPL3VwbDrtdAyAXnCTULzepJzUuc6T4lPp-vX7A&s=10"
        />
        <ProfileCard
          name="Pooja Patil"
          course="MBA Student"
          college="SGM University"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaoIOQPL3VwbDrtdAyAXnCTULzepJzUuc6T4lPp-vX7A&s=10"
        />
      </div>
    </div>
  );
}
export default User;
