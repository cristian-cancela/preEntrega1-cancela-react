import CartItems from "./CartItems"
import EstiloBotonCart from "./EstiloBotonCart"

const CartWidget = () => {
    return (
        <div className=" rounded-circle  position-relative" >
           <EstiloBotonCart/>
            <CartItems count = {2}/>
        </div>
    )
}

export default CartWidget
