import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import person from "./Assets/infoPersons.svg";

function App() {
  return (
    <>
      <Navbar />

      <section className="section hero">
        <div className="outer-container">
          <h1 className="title">Encoded Episode</h1>
          <p>tagline for encoded episode tagline for encoded episode</p>
          <p>tagline for encoded episode tagline for encoded episode</p>
        </div>
        <button className="watch-button">Watch Last Episode</button>
      </section>

      <section className="section info">
        <div className="info1">
          <div className="col">
            <h2>Why Tune In ?</h2>
            <p>
              Encoded Episodes is a podcast dedicated to uncovering the
              journeys, insights, and success stories of extraordinary
              personalities. Through in-depth conversations, we decode the
              experiences and wisdom of professionals, thought leaders, and
              innovators. Our mission is to provide valuable perspectives that
              inspire, educate, and motivate our audience. Whether you're
              looking for advice on personal growth, professional development,
              or just want to hear the stories of remarkable individuals,
              Encoded Episodes delivers.
            </p>
          </div>

          <img src={person} alt="person"></img>
        </div>

        <div className="info2">
          <img src={person} alt="person"></img>
          <div className="col">
            <h2>Meet Shubham </h2>
            <p>
              Encoded Episodes is a podcast dedicated to uncovering the
              journeys, insights, and success stories of extraordinary
              personalities. Through in-depth conversations, we decode the
              experiences and wisdom of professionals, thought leaders, and
              innovators. Our mission is to provide valuable perspectives that
              inspire, educate, and motivate our audience. Whether you're
              looking for advice on personal growth, professional development,
              or just want to hear the stories of remarkable individuals,
              Encoded Episodes delivers.
            </p>
          </div>
        </div>  
      </section>

      <section className="section last">
        <div className="section upcoming-guests">
          <h2>Upcoming Guests</h2>
          <p>Details about upcoming guests.</p>
        </div>
        <div className="section previoud-episodes">
          <h2>Previous Episodes</h2>
          <p>Details about previous episodes.</p>
        </div>
      </section>

      {/* <Footer/> */}
    </>
  );
}

export default App;
