const CartItems = ({ count = 0 }) => {
    return (
        <div className="position-absolute  px-1"
            style={{ top: 10, right: 20 }}>

            <span style={{ fontSize: "18px", color: "blue" }}>
                {count}
            </span>

        </div>
    )
}

export default CartItems

