import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useContext } from "react";
import { cartCtx, currencyFormatter } from '../../App';

export function AdminPhone({ mobile, deleteMobile }) {
  const [usercart,admincart, updateCart, setUserCart,setAdminCart,usertotalQty,admintotalQty] = useContext(cartCtx);
  const navigate = useNavigate();
  return (
    <div className="phone-container">
      <img src={mobile.img} alt={mobile.model} className='phone-image' onClick={() => navigate(`/admin/phonedetails/${mobile._id}`)} />
      <h2 className='phone-name'>{mobile.model}</h2>
      <p className='phone-company'>{mobile.company}</p>
      <h2 className='phone-price'>{currencyFormatter(mobile.price)}</h2>

      <div>
        <button className='phone-cart' onClick={() => updateCart({ mobile, action: 'increment' })} style={{ fontSize: '20px' }}>Add to Cart</button>




        <IconButton
          onClick={() => {
            navigate("/admin/editmobile/edit/" + mobile._id);

          }}
          style={{ marginLeft: "auto" }}
          className="movie-show-button"
          aria-label="delete"
          color="primary"
        >
          <EditIcon style={{ fontSize: '35px', marginLeft: 'auto' }} />
        </IconButton>

        <IconButton
          onClick={() => deleteMobile(mobile._id)}
          className="mobile-show-button"
          aria-label="delete"
          color="error"
        >
          <DeleteIcon style={{ fontSize: '35px' }} />
        </IconButton>
      </div>

    </div>
  );
}
