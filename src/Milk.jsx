/*import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "./Store";

function Milk()
{
    let milk=useSelector(state=>state.products.milk)
    const dispath=useDispatch();

        let finalItems=milk.map((item,index) => (<li key={index}>
            {item.name}-${item.price}
            <button onClick={()=>dispath(addtocart(item))}>AddToCart</button>
        </li>
        ))
    return(
    <>
    <h1>Milk products...</h1>
    <ol>{finalItems}</ol>
    </>
    )
}
export default Milk;*/
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "./Store";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Milk() {
    let milk = useSelector(state => state.products.milk);
    let dispatch = useDispatch();

    // Search state
    const [searchQuery, setSearchQuery] = useState("");

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    // Price filter state (using the label to store selected ranges)
    const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);

    // Price ranges for the filter with `min` and `max` values
    const priceRanges = [
        { label: "$10 - $50", min: 10, max: 50 },
        { label: "$50 - $100", min: 50, max: 100 },
        { label: "$100+", min: 100, max: Infinity }
    ];

    // Filter items based on search query and selected price range
    const filteredItems = milk.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());

        // Check if item matches any of the selected price ranges
        const matchesPriceRange =
            selectedPriceRanges.length === 0 || // No filter applied
            selectedPriceRanges.some(rangeLabel => {
                const range = priceRanges.find(r => r.label === rangeLabel);
                return item.price >= range.min && item.price <= range.max;
            });

        return matchesSearch && matchesPriceRange;
    });

    // Calculate total pages
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

    // Get items for current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

    // Toggle selected price range in the selectedPriceRanges state
    const handlePriceRangeChange = (rangeLabel) => {
        setSelectedPriceRanges((prevSelected) =>
            prevSelected.includes(rangeLabel)
                ? prevSelected.filter((label) => label !== rangeLabel)
                : [...prevSelected, rangeLabel]
        );
    };

    return (
        <div className="container my-4">
            <h1 className="text-center mb-4">Milk Items</h1>

            {/* Search Bar */}
            <div className="mb-4 d-flex justify-content-center">
                <input
                    type="text"
                    className="form-control w-50"
                    placeholder="Search for a milk item..."
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

            {/* Price Filter */}
            <div className="mb-4">
                <h5>Price Range</h5>
                <div className="d-flex flex-wrap">
                    {priceRanges.map((range, index) => (
                        <div key={index} className="form-check me-3">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id={`price-${index}`}
                                checked={selectedPriceRanges.includes(range.label)}
                                onChange={() => handlePriceRangeChange(range.label)}
                            />
                            <label className="form-check-label" htmlFor={`price-${index}`}>
                                {range.label}
                            </label>
                        </div>
                    ))}
                </div>
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

export default Milk;
