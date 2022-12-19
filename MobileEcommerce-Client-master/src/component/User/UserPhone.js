import { useNavigate } from 'react-router-dom';

import { useContext } from "react";
import { cartCtx, currencyFormatter } from '../../App';

export function UserPhone({ mobile, deleteMobile }) {
  const [usercart,admincart, updateCart, setUserCart,setAdminCart,usertotalQty,admintotalQty] = useContext(cartCtx);
  const navigate = useNavigate();
  return (
    <div className="phone-container">
      <img src={mobile.img} alt={mobile.model} className='phone-image' onClick={() => navigate(`/user/phonedetails/${mobile._id}`)} />
      <h2 className='phone-name'>{mobile.model}</h2>
      <p className='phone-company'>{mobile.company}</p>
      <h2 className='phone-price'>{currencyFormatter(mobile.price)}</h2>

      <div>
        <button className='phone-cart' onClick={() => updateCart({ mobile, action: 'increment' })} style={{ fontSize: '20px' }}>Add to Cart</button>




        
      </div>

    </div>
  );
}
