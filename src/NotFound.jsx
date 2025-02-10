/*import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound(){
    const navigate=useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
            navigate("/home")
        },5000)
    },[])
    return(
        <>
        <h1>404 Page NotFound</h1>
        <img src="src/image.png"/>
        </>
    )
}
export default NotFound;*/
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function NotFound() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/home");
        }, 5000);
        return () => clearTimeout(timer); // Cleanup timeout
    }, [navigate]);

    return (
        <div className="container text-center mt-5">
            <h1 className="text-danger">404 - Page Not Found</h1>
            <p className="text-muted">Redirecting to Home in 5 seconds...</p>
            <img src="public/NF.png" alt="Not Found" className="/NF.png" style={{ maxWidth: "600px" }} />
        </div>
    );
}

export default NotFound;

