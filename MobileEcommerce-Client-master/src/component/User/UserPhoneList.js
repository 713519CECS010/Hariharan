import { API_URL } from '../../GlobalConstants';
import { UserNavbar } from '../User/UserNavbar';
import { useState, useEffect } from "react";
import { UserPhone } from './UserPhone';








export function UserPhoneList() {
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
      <UserNavbar />
      <div className="phone-list-container">



        {mobiles.map((mobile) => <UserPhone key={mobile._id} mobile={mobile} deleteMobile={deleteMobile} />)}

      </div>
    </div>
  );
}
