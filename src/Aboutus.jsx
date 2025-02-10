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
                    <h2 className="text-primary mb-4">This is the About Us page</h2>
                    <img 
                        src="/mart.png" 
                        alt="About Us" 
                        className="img-fluid rounded mb-4" 
                        style={{ maxHeight: "400px", objectFit: "cover" }}
                    />
                    <p className="lead text-secondary">
                        Welcome to our mart! We are committed to delivering the best service for our customers.
                        Our team works hard to ensure that you receive the highest quality products and the best customer care.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Aboutus;
