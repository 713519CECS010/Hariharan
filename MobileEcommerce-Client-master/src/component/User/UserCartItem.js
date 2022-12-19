import { useContext } from "react";
import { cartCtx, currencyFormatter } from '../../App';








export function UserCartItem({ mobile }) {
  const [usercart,admincart, updateCart, setUserCart,setAdminCart,usertotalQty,admintotalQty] = useContext(cartCtx);
  return (
    <div className="cart-container">
      <img src={mobile.img} alt={mobile.model} className='cart-image' />
      <div>
        <h2 className='cart-name'>{mobile.model}</h2>
        <p className='cart-company'>{mobile.company}</p>

        <p className='cart-Quantity'><span>price:</span>{currencyFormatter(mobile.price)}</p>

        <button onClick={() => updateCart({ mobile, action: 'decrement' })}>➖</button>  {mobile.qty}  <button onClick={() => updateCart({ mobile, action: 'increment' })}>➕</button>
      </div>
      <p className='cart-Total'><span>Subtotal:</span>{currencyFormatter(mobile.price * mobile.qty)}</p>

    </div>
  );
}
