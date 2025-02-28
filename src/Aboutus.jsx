/*import "bootstrap/dist/css/bootstrap.min.css";

function Aboutus() {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-12 text-center">
                
                    <h2 className="text-primary">This is the About Us page</h2>
                </div>
            </div>
        </div>
    );
}

export default Aboutus;*/
import "bootstrap/dist/css/bootstrap.min.css";

function Aboutus() {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-12 text-center">
                    <h2 className="text-primary mb-4" style={{ color: "#003366" }}>Welcome To Super Mart</h2>
                    <img 
                        src="/mart.png" 
                        alt="About Us" 
                        className="img-fluid rounded mb-4" 
                        style={{ maxHeight: "400px", objectFit: "cover", borderRadius: "10px" }}
                    />
                    <p className="lead text-secondary" style={{ color: "#999", fontWeight: "bold" }}>
                        Welcome to our mart! We are committed to delivering the best service for our customers.
                        Our team works hard to ensure that you receive the highest quality products and the best customer care.
                    </p>
                    <div className="bg-info text-white p-4 rounded mt-4">
                        <h4>Why Choose Us?</h4>
                        <ul className="list-unstyled">
                            <li><strong>Wide Variety:</strong> We offer a wide selection of products.</li>
                            <li><strong>Best Quality:</strong> Quality is our top priority.</li>
                            <li><strong>Customer Care:</strong> Our team is here to assist you anytime.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aboutus;
