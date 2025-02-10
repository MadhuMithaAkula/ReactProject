import "bootstrap/dist/css/bootstrap.min.css";

function Contactus() {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-12 text-center">
                    <h2 className="text-primary mb-4">📞 Contact Us</h2>
                    <p className="lead">We'd love to hear from you! Reach out to us using the details below.</p>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-sm p-4">
                        <h4 className="text-center text-secondary mb-3">📧 Email Us</h4>
                        <p className="text-center">
                            ✉️ <a href="mailto:support@example.com">support@example.com</a>
                        </p>

                        <h4 className="text-center text-secondary mt-4">📞 Call Us</h4>
                        <p className="text-center">
                            📲 <a href="tel:+1234567890">+1 (234) 567-890</a>
                        </p>

                        <h4 className="text-center text-secondary mt-4">🌍 Follow Us</h4>
                        <p className="text-center">
                            🔗 <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> |  
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a> |  
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contactus;


