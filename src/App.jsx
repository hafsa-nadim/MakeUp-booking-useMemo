import { useState, useMemo } from "react";
import Swal from "sweetalert2";
import "./App.css";

export default function App() {
  const [makeup, setMakeup] = useState("party");
  const [event, setEvent] = useState("party");
  const [people, setPeople] = useState(1);

  const totalPrice = useMemo(() => {
    const makeupPrice = {
      party: 50,
      bridal: 150,
      hd: 100,
    };

    const eventPrice = {
      party: 20,
      wedding: 40,
      photoshoot: 30,
    };

    return (makeupPrice[makeup] + eventPrice[event]) * people;
  }, [makeup, event, people]);

  const handleBooking = () => {
    Swal.fire({
      title: "Booking Confirmed 💄",
      text: `Your booking total is $${totalPrice}`,
      icon: "success",
      confirmButtonColor: "#ec4899",
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="page">
      <div className="card">
        <h2 className="title">Makeup Booking</h2>

        <select className="input" onChange={(e) => setMakeup(e.target.value)}>
          <option value="party">Party Makeup</option>
          <option value="bridal">Bridal Makeup</option>
          <option value="hd">HD Makeup</option>
        </select>

        <select className="input" onChange={(e) => setEvent(e.target.value)}>
          <option value="party">Party Event</option>
          <option value="wedding">Wedding</option>
          <option value="photoshoot">Photoshoot</option>
        </select>

        <input
          className="input"
          type="number"
          min="1"
          value={people}
          onChange={(e) => setPeople(Number(e.target.value))}
        />

        <h3 className="price">Total: ${totalPrice}</h3>

        <button className="button" onClick={handleBooking}>
          Book Now
        </button>
      </div>
    </div>
  );
}
