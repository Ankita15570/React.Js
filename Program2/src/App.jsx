import Header from "./component/Header.jsx";
import Footer from "./component/Footer.jsx";
import ProfileCard from "./component/ProfileCard.jsx";
import "./App.css";
function App() {
  return (
    <div>
      <Header />
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
      </div>
      <Footer />
    </div>
  );
}
export default App;
