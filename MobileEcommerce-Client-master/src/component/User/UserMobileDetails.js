import { API_URL } from '../../GlobalConstants';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useContext } from "react";
import { cartCtx } from '../../App';
import { UserNavbar } from '../User/UserNavbar';








export function UserMobileDetails() {
  const [usercart,admincart, updateCart, setUserCart,setAdminCart,usertotalQty,admintotalQty] = useContext(cartCtx);

  const { id } = useParams();
  const history = useNavigate();
  const [mobile, setMobile] = useState({});

  useEffect(() => {
    fetch(`${API_URL}/mobilelist/${id}`, { method: "GET" })
      .then((data) => data.json())
      .then((mv) => setMobile(mv));
  }, [id]);



  return (
    <div className="mobile-detail-container">

<UserNavbar/>

      <div className="mobile-specs">
        <img src={mobile.img} alt={mobile.model} className='mobile-img' />
        <div>

          <h3 className="mobile-name">{mobile.model}</h3>
          <p className="mobile-summary">{mobile.company}</p>
          <p className="mobile-summary">{mobile.price}</p>
          <p className="mobile-summary">{mobile.details}</p>

          <div style={{ display: 'flex', margin: '20px', gap: '20px', marginRight: 'auto' }}>
            <Button onClick={() => history(-1)} variant="contained" color='error' startIcon={<ArrowBackIcon />}> Back </Button>
            <Button variant="contained" color='primary' onClick={() => updateCart({ mobile, action: 'increment' })}>Add to cart</Button>
          </div>

        </div>

      </div>





    </div>

  );
}
