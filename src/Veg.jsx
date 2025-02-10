/*import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "./Store";
import 'bootstrap/dist/css/bootstrap.min.css';

function Veg()
{
    let veg=useSelector(state=>state.products.veg)
    let dispath=useDispatch()

        let finalItems=veg.map((item,index) => (<li key={index}>
            {item.name}-${item.price}
            <button onClick={()=>dispath(addtocart(item))}>AddToCart</button>
        </li>
        ))
    return(
    <>
    <h1>Veg items...</h1>
    <ol>{finalItems}</ol>
    </>
    )
}
export default Veg;*/
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "./Store";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Veg() {
    let veg = useSelector(state => state.products.veg);
    let dispatch = useDispatch();

    // Search state
    const [searchQuery, setSearchQuery] = useState("");

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    // Filter items based on search query
    const filteredItems = veg.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Calculate total pages
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

    // Get items for current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className="container my-4">
            <h1 className="text-center mb-4">Veg Items</h1>

            {/* Search Bar */}
            <div className="mb-4 d-flex justify-content-center">
                <input 
                    type="text"
                    className="form-control w-50"
                    placeholder="Search for a vegetable..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button 
                    className="btn btn-success ms-2"
                    onClick={() => setCurrentPage(1)} // Reset to first page on search
                >
                    Search
                </button>
            </div>

            <div className="row">
                {currentItems.map((item) => (
                    <div key={item.id} className="col-md-4 mb-4">
                        <div className="card h-100 shadow-sm">
                            <img 
                                src={item.image} 
                                className="card-img-top" 
                                alt={item.name} 
                                style={{ height: "200px", objectFit: "cover" }} 
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text fw-bold">${item.price}</p>
                                <button 
                                    onClick={() => dispatch(addtocart(item))} 
                                    className="btn btn-primary"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <nav>
                    <ul className="pagination justify-content-center mt-4">
                        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                            <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>
                                Previous
                            </button>
                        </li>
                        {[...Array(totalPages).keys()].map((num) => (
                            <li key={num} className={`page-item ${currentPage === num + 1 ? "active" : ""}`}>
                                <button className="page-link" onClick={() => setCurrentPage(num + 1)}>
                                    {num + 1}
                                </button>
                            </li>
                        ))}
                        <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                            <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>
                                Next
                            </button>
                        </li>
                    </ul>
                </nav>
            )}
        </div>
    );
}

export default Veg;
