import IconCart from "../assets/IconCart";
import CartItems from "./CartItems";

const CartWidget = () => {
    return (
        <button className="bg-warning rounded-circle p-3 position-relative" >
            <IconCart/> 
            <CartItems count = {2}/>
        </button>
    )
} ;

export default CartWidget;