/*import { useSelector } from "react-redux";

function Order()
{
    const purchaseHistory=useSelector(state=>state.purchasedetails);
    
    return(
        <>
        <div>
            <h2>purchaseHistory</h2>
            {purchaseHistory.length===0?
            (
                <p>No purchase history available</p>
            ):
            (
                <ul>
                    {purchaseHistory.map((purchase,index)=>
                    (
                        <li key={index}>
                        <p>Date:{purchase.date}</p>
                        <p>TotalAmount:${purchase.totalprice.toFixed(2)}</p>
                        <ul>
                           { purchase.items.map((item,itemindex)=>(
                                 <li key={itemindex}>
                                  {item.name}-${item.price}*{item.quantity}
                                  </li>    
                         ))}
                          </ul>
                          </li>
                    ))}
            </ul>
            )}
        </div>
        </>

    );
}
export default Order;*/
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

function Order() {
    const purchaseHistory = useSelector(state => state.purchasedetails);

    // Function to format the date and time
    const formatDateTime = (dateTime) => {
        const options = {
            weekday: "short", year: "numeric", month: "short", day: "numeric", 
            hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true
        };
        const formattedDate = new Date(dateTime).toLocaleString("en-US", options);
        return formattedDate;
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center text-primary mb-4">📦 Purchase History</h2>
            
            {purchaseHistory.length === 0 ? (
                <div className="alert alert-warning text-center">
                    No purchase history available.
                </div>
            ) : (
                <div className="row justify-content-center">
                    {purchaseHistory.map((purchase, index) => (
                        <div key={index} className="col-md-8 mb-4">
                            <div className="card shadow-lg border-light">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        🗓️ <strong>Date:</strong> 
                                        <span className="text-primary">{purchase.date}</span>
                                        <br></br>
                                        <strong>Time:</strong> 
                                        <span className="text-primary">{purchase.time}</span>
                                    </h5>
                                    <h5 className="text-danger">
                                        💰 <strong>Total Amount:</strong> 
                                        <span className="fw-bold">${purchase.totalPrice.toFixed(2)}</span>
                                    </h5>
                                    <h6 className="mt-3">🛒 Items Purchased:</h6>
                                    <ul className="list-group mt-2">
                                        {purchase.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="list-group-item d-flex justify-content-between">
                                                <span>{item.name}</span>
                                                <span>
                                                    ${item.price.toFixed(2)} × {item.quantity} = 
                                                    <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Order;



