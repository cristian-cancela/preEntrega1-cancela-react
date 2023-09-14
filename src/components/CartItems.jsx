const CartItems = ({ count = 0 }) => {
    return (
        <div className="position-absolute  px-2"
            style={{ top: 0, right: 0 }}>

            <span style={{ fontSize: "12px", color: "black" }}>
                {count}
            </span>

        </div>
    )
}

export default CartItems