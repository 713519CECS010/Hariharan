import { API_URL } from '../../GlobalConstants';
import { Navbar } from './Navbar';
import { useState, useEffect } from "react";
import { AdminPhone } from './AdminPhone';








export function AdminPhoneList() {
  const [mobiles, setMobiles] = useState([]);

  const getMobiles = () => {
    fetch(`${API_URL}/mobilelist`)
      .then((data) => data.json())
      .then((mbs) => setMobiles(mbs));
  };
  useEffect(getMobiles, []);

  const deleteMobile = (id) => {
    fetch(`${API_URL}/mobilelist/${id}`, { method: "DELETE" })
      .then(() => getMobiles());
  };

  return (
    <div>
      <Navbar />
      <div className="phone-list-container">



        {mobiles.map((mobile) => <AdminPhone key={mobile._id} mobile={mobile} deleteMobile={deleteMobile} />)}

      </div>
    </div>
  );
}
