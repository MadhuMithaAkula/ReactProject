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

            {/* Google Map Embed */}
            <div className="row justify-content-center mt-5">
                <div className="col-md-8">
                    <h4 className="text-center text-secondary mb-3">📍 Our Location</h4>
                    <div className="embed-responsive embed-responsive-16by9">
                    <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d378226.5502993728!2d78.474673!3d17.385044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93ed3c1b665f%3A0x9987f132b17438f1!2sHyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sin!4v1613665221589!5m2!1sen!2sin"
    width="100%" 
    height="400" 
    style={{ border: "0" }} 
    allowFullScreen="" 
    loading="lazy"
    title="Hyderabad Location Map"
/>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contactus;
