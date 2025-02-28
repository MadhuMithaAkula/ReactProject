/*import { useDispatch, useSelector } from "react-redux";
import { addpurchasedetails, clearcart, increment } from "./Store";
import { decrement } from "./Store";
import { remove } from "./Store";
import { useState } from "react";
function Cart()
{
    //increment,decrement,remove
    let cart=useSelector(state=>state.cart)
    let dispatch=useDispatch()
    let cartItems=cart.map((item,index)=>(
    <li key={index}>
        {item.name}-${item.price}
        <button onClick={()=>dispatch(increment(item))}>+</button>
        <button onClick={()=>dispatch(decrement(item))}>-</button>
        Quantity:{item.quantity}
        <button onClick={()=>dispatch(remove(item))}>Remove</button>

    </li>
    ))
    //final amount
    let totalprice=cart.reduce((sum,item)=>sum+item.quantity*item.price,0);
    let[discountpercentage,setdiscountpercentage]=useState(0);
    let[ShowDiscount,setShowDiscount]=useState(false);
    let discountamount=totalprice*discountpercentage/100;
    let finalamount=totalprice-discountamount;
    //apply the cupon code
    let[couponcode,setcouponcode]=useState(" ");
    
let[couponcodeDiscountper,setdiscountper]=useState(0);
let hanlingCouponper=()=>{
    switch(couponcode.toUpperCase()){
        case "RATAN10":setdiscountper(10);
        break;
        case "RATAN20":setdiscountper(20);
        break;
        case "RATAN30":setdiscountper(30);
        break;
        case "RATAN40":setdiscountper(40);
        break;
        default:alert("Invalid coupon code");
        setdiscountper(0);
        break;
    }
}
let couponcodeDiscountAmount=totalprice*couponcodeDiscountper/100;


let handlepurchasedetails = () => {
    let purchaseDate=new Date().toLocaleDateString();
    let purchaseitms={
        date:purchaseDate,
        items:[...cart],
        totalprice:totalprice
    }
   
    dispatch(clearcart());
    dispatch(addpurchasedetails(purchaseitms));
}
    return(
        <>

        {cart.length>0?
    <div>
    <h1>This is Cart page</h1>
    <ul>{cartItems}</ul>
    <p>your totalprice...{totalprice.toFixed(2)}</p>
    {ShowDiscount &&
    <div>
    <p style={{color:'blue',fontFamily:'fantasy'}}>your discount Applied...{discountpercentage}%</p>
    <p style={{color:'pink',fontFamily:'monospace'}}>your discuunt amount...{discountamount}</p>
    </div>
    }
    <p>your net amount to pay...{finalamount.toFixed(2)}</p>
    <button onClick={()=>{setdiscountpercentage(10),setShowDiscount(true)}}>Apply 10% Discount</button>
    <button onClick={()=>{setdiscountpercentage(20),setShowDiscount(true)}}>Apply 20% Discount</button>
    <button onClick={()=>{setdiscountpercentage(30),setShowDiscount(true)}}>Apply 30% Discount</button>
    <div>
        <input type="text" 
        value={couponcode} 
        onChange={(e)=>setcouponcode(e.target.value)} 
    placeholder="Enter coupon code" />
    <button onClick={()=>hanlingCouponper()}>Apply Couponcode</button>
    </div>
    <div>
    <p>Your coupon code Applied:{couponcode}</p>
<p>Your couponcode Discount:{couponcodeDiscountAmount}</p>

<button onClick={handlepurchasedetails}> Complete Purchase</button>
    </div>
</div>
 :
 <h2>your cart is empty</h2>
}

    </>
    )
}

export default Cart;*/
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, remove, addpurchasedetails, clearcart } from "./Store";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";  // Correct import for useNavigate

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const { isAuthenticated } = useSelector((state) => state.auth);  // Make sure to fetch authentication status
  const dispatch = useDispatch();
  const navigate = useNavigate();  // Use useNavigate hook for navigation

  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [showDiscount, setShowDiscount] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [couponCodeDiscountPer, setCouponCodeDiscountPer] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);
  const discountAmount = (totalPrice * discountPercentage) / 100;
  const couponDiscountAmount = (totalPrice * couponCodeDiscountPer) / 100;
  const finalAmount = totalPrice - discountAmount - couponDiscountAmount;

  const handleCoupon = () => {
    const code = couponCode.trim().toUpperCase();
    const couponDiscounts = {
      "MADHU10": 10,
      "MADHU20": 20,
      "MADHU30": 30,
      "MADHU40": 40,
    };

    if (couponDiscounts[code]) {
      setCouponCodeDiscountPer(couponDiscounts[code]);
      setCouponApplied(true);
    } else {
      alert("❌ INVALID COUPON CODE ❌");
      setCouponCodeDiscountPer(0);
      setCouponApplied(false);
    }
  };

  const handlePurchase = () => {
    if (!isAuthenticated) {
      // Redirect to login if not logged in
      alert("You need to login first!");
      navigate("/login");  // Corrected to use navigate
      return;
    }
    const purchaseDate = new Date().toLocaleDateString();
    const purchaseTime = new Date().toLocaleTimeString();

    const purchaseDetails = {
      items: [...cartItems],
      totalPrice: finalAmount,
      date: purchaseDate,
      time: purchaseTime,
    };

    dispatch(addpurchasedetails(purchaseDetails));
    dispatch(clearcart());
    navigate("/order");  // Redirect to order page after successful purchase
  };

  return (
    <div className="container mt-5" style={{ paddingLeft: "400px" }}>
      {cartItems.length > 0 ? (
        <>
          <h1>Cart Page</h1>
          <ul className="list-group">
            {cartItems.map((item, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {/* Product Image */}
                <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', objectFit: 'cover' }} className="mr-2" />
                
                {item.name} - ${item.price.toFixed(2)}
                <div>
                  <button className="btn btn-sm btn-success mx-1" onClick={() => dispatch(increment(item))}>
                    +
                  </button>
                  <button className="btn btn-sm btn-warning mx-1" onClick={() => dispatch(decrement(item))}>
                    -
                  </button>
                  Quantity: {item.quantity}
                  <button className="btn btn-sm btn-danger mx-1" onClick={() => dispatch(remove(item))}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-3">Total Price: <strong>${totalPrice.toFixed(2)}</strong></p>

          {showDiscount && (
            <div>
              <p>Discount Applied: {discountPercentage}%</p>
              <p>Discount Amount: <strong>-${discountAmount.toFixed(2)}</strong></p>
            </div>
          )}

          {couponApplied && (
            <div>
              <p>Coupon Code: <strong>{couponCode.toUpperCase()}</strong> Applied ✅</p>
              <p>Coupon Discount: <strong>-${couponDiscountAmount.toFixed(2)}</strong></p>
            </div>
          )}

          <p><strong>Final Amount to Pay: ${finalAmount.toFixed(2)}</strong></p>

          {/* Discount Buttons */}
          <div>
            <button className="btn btn-primary mx-1" onClick={() => { setDiscountPercentage(10); setShowDiscount(true); }}>
              Apply 10% Discount
            </button>
            <button className="btn btn-primary mx-1" onClick={() => { setDiscountPercentage(20); setShowDiscount(true); }}>
              Apply 20% Discount
            </button>
            <button className="btn btn-primary mx-1" onClick={() => { setDiscountPercentage(30); setShowDiscount(true); }}>
              Apply 30% Discount
            </button>
          </div>

          {/* Coupon Code Input */}
          <div className="mt-3">
            <input
              type="text"
              className="form-control w-50 d-inline"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              placeholder="Enter Coupon Code"
            />
            <button className="btn btn-secondary mx-2" onClick={handleCoupon}>
              Apply Coupon
            </button>
          </div>

          <button className="btn btn-success mt-3" onClick={handlePurchase}>
            Complete Purchase
          </button>
        </>
      ) : (
        <div className="d-flex flex-column align-items-center justify-content-center text-center" style={{ minHeight: "300px" }}>
          <img
            src="public/cart.png"  // Add a valid empty cart image URL here
            alt="Empty Cart"
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
          <h1 className="mt-3" style={{ color: "palevioletred" }}>Your Cart is Empty</h1>
          <p style={{ color: "olivedrab" }}>    "Oops! It looks like your cart is empty. Time to fill it up!"</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
