/*import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Veg from "./Veg";
import Nonveg from "./Nonveg";
import Cart from "./Cart";
import Order from "./Order";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import "./App.css";
import Milk from "./Milk";
import { useDispatch, useSelector } from "react-redux";
import { logout} from "./Store";
import Login from "./Login";
import NotFound from "./NotFount";
function App()
{
    const cart=useSelector(state=>state.cart);
    const totalitem=cart.reduce((sum,item)=>sum+item.quantity,0);

    const {isAuthenticated,user}=useSelector(state=>state.auth);
    const dispatch=useDispatch();
    return(
        <>
        <BrowserRouter>
        <Link to='/home' className="class">Home</Link>
        <Link to='/veg' className="class">Veg</Link>
        <Link to='/nonveg' className="class">Nonveg</Link>
        <Link to='/Milk' className="class">Milk</Link>
        <Link to='/cart' className="class">Cart<span>{totalitem}</span></Link>
        <Link to='/order' className="class">Order</Link>
        <Link to='/aboutus' className="class">Aboutus</Link>
        <Link to='/contactus' className="class">Contactus</Link>
        {isAuthenticated ? (
           <>
           <span>Welcome,{user}</span>
           <button onClick={()=>dispatch(logout())}>Logout</button>
           </> 
        ):
        (
            <Link to= '/Login' className="class">Login</Link>
        )
        }
        <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/veg" element={<Veg/>} />
            <Route path="/nonveg" element={<Nonveg/>} />
            <Route path="/Milk" element={<Milk />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/order" element={<Order/>} />
            <Route path="/aboutus" element={<Aboutus/>} />
            <Route path="/contactus" element={<Contactus/>} />
            <Route path="/login" element={<Login/>}/>    
            <Route path="*" element={<NotFound/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default App;*/
/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore, faHome, faLeaf, faPaw, faGlassWhiskey, faCartArrowDown, faInfoCircle, faPhone, faShoppingCart, faSignOutAlt, faSignInAlt, faBirthdayCake, faCandyCane, faAppleAlt, faCookie } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/home">
                        <FontAwesomeIcon icon={faStore} /> My Store
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/home">
                                    <FontAwesomeIcon icon={faHome} /> Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/veg">
                                    <FontAwesomeIcon icon={faLeaf} /> Veg
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/nonveg">
                                    <FontAwesomeIcon icon={faPaw} /> Non-Veg
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/milk">
                                    <FontAwesomeIcon icon={faGlassWhiskey} /> Milk
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cake">
                                    <FontAwesomeIcon icon={faBirthdayCake} /> Cake
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/chocolates">
                                    <FontAwesomeIcon icon={faCandyCane} /> Chocolates
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/snacks">
                                    <FontAwesomeIcon icon={faCookie} /> Snacks
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/fruits">
                                    <FontAwesomeIcon icon={faAppleAlt} /> Fruits
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/order">
                                    <FontAwesomeIcon icon={faCartArrowDown} /> Order
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/aboutus">
                                    <FontAwesomeIcon icon={faInfoCircle} /> About Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contactus">
                                    <FontAwesomeIcon icon={faPhone} /> Contact Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">
                                    <FontAwesomeIcon icon={faShoppingCart} /> Cart <span className="badge bg-primary">0</span>
                                </Link>
                            </li>
                            <nav>
              {isAuthenticated ? (
                <>
                  <Navbar.Text className="me-2 text-white">
                    <i className="fas fa-user me-1"></i>Welcome, {user}
                  </Navbar.Text>
                  <Button
                    variant="danger"
                    className="rounded-pill px-4"
                    onClick={() => dispatch(logout())}
                  >
                    <i className="fas fa-sign-out-alt me-1"></i>Logout
                  </Button>
                </>
              ) : (
                <Button
                  variant="info"
                  className="rounded-pill px-4 text-white"
                  as={Link}
                  to="/login"
                  style={{ background: "linear-gradient(90deg, #56ccf2, #2f80ed)" }}
                >
                  <i className="fas fa-sign-in-alt me-1"></i>Sign In
                </Button>
              )}
              </nav>
              </ul>
                    </div>
                </div>
            </nav>

            
            <Routes>
                <Route path="/home" element={<h1>Home Page</h1>} />
                <Route path="/veg" element={<h1>Veg Section</h1>} />
                <Route path="/nonveg" element={<h1>Non-Veg Section</h1>} />
                <Route path="/milk" element={<h1>Milk Section</h1>} />
                <Route path="/cake" element={<h1>Cake Section</h1>} />
                <Route path="/chocolates" element={<h1>Chocolates</h1>} />
                <Route path="/snacks" element={<h1>Snacks Section</h1>} />
                <Route path="/fruits" element={<h1>Fruits Section</h1>} />
                <Route path="/order" element={<h1>Order Page</h1>} />
                <Route path="/aboutus" element={<h1>About Us</h1>} />
                <Route path="/contactus" element={<h1>Contact Us</h1>} />
                <Route path="/cart" element={<h1>Cart Page</h1>} />
                <Route path="/login" element={<h1>Login Page</h1>} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;*/
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./Store";
import { Container, Navbar, Nav, Button, Badge } from "react-bootstrap";

import Home from "./Home";
import Milk from "./Milk";
import Cart from "./Cart";
import Nonveg from "./Nonveg";
import Order from "./Order";
import NotFound from "./NotFound";
import Login from "./Login";
import Veg from "./Veg";
import Contactus from "./Contactus";
import Aboutus from "./Aboutus";
import Chocolates from "./Chocolates";
import Cakes from "./Cakes";
import Snacks from "./Snacks";
import Fruits from "./Fruits";
import "./App.css";

function App() {
  const cart = useSelector((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <Navbar
        style={{
          background: "linear-gradient(45deg,rgba(107, 17, 203, 0.51),rgb(31, 156, 165))",
        }}
        variant="dark"
        expand="lg"
        className="mb-4"
      >
        <Container>
          <Navbar.Brand as={Link} to="/home" className="fw-bold text-white">
            <i className="fas fa-seedling me-2"></i>Mart 🌿
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/veg" className="text-light">
                <i className="fas fa-carrot me-1"></i>Veg
              </Nav.Link>
              <Nav.Link as={Link} to="/nonveg" className="text-light">
                <i className="fas fa-drumstick-bite me-1"></i>Nonveg
              </Nav.Link>
              <Nav.Link as={Link} to="/milk" className="text-light">
                <i className="fas fa-glass-whiskey me-1"></i>Milk
              </Nav.Link>
              <Nav.Link as={Link} to="/chocolates" className="text-light">
                <i className="fas fa-candy-cane me-1"></i>Chocolates
              </Nav.Link>
              <Nav.Link as={Link} to="/cakes" className="text-light">
                <i className="fas fa-birthday-cake me-1"></i>Cakes
              </Nav.Link>
              <Nav.Link as={Link} to="/fruits" className="text-light">
                <i className="fas fa-apple-alt me-1"></i>Fruits
              </Nav.Link>
              <Nav.Link as={Link} to="/snacks" className="text-light">
                <i className="fas fa-cookie-bite me-1"></i>Snacks
              </Nav.Link>
              <Nav.Link as={Link} to="/cart" className="text-light">
                <i className="fas fa-shopping-cart me-1"></i>Cart{" "}
                <Badge bg="light" text="dark">{totalItems}</Badge>
              </Nav.Link>
              <Nav.Link as={Link} to="/order" className="text-light">
                <i className="fas fa-clipboard-list me-1"></i>Order
              </Nav.Link>
              <Nav.Link as={Link} to="/aboutus" className="text-light">
                <i className="fas fa-info-circle me-1"></i>About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/contactus" className="text-light">
                <i className="fas fa-phone me-1"></i>Contact Us
              </Nav.Link>
            </Nav>
            <Nav>
              {isAuthenticated ? (
                <>
                  <Navbar.Text className="me-2 text-white">
                    <i className="fas fa-user me-1"></i>Welcome, {user}
                  </Navbar.Text>
                  <Button
                    variant="danger"
                    className="rounded-pill px-4"
                    onClick={() => dispatch(logout())}
                  >
                    <i className="fas fa-sign-out-alt me-1"></i>Logout
                  </Button>
                </>
              ) : (
                <Button
                  variant="info"
                  className="rounded-pill px-4 text-white"
                  as={Link}
                  to="/login"
                  style={{
                    background: "linear-gradient(90deg, #56ccf2, #2f80ed)",
                  }}
                >
                  <i className="fas fa-sign-in-alt me-1"></i>Login
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/veg" element={<Veg />} />
          <Route path="/nonveg" element={<Nonveg />} />
          <Route path="/milk" element={<Milk />} />
          <Route path="/chocolates" element={<Chocolates />} />
          <Route path="/cakes" element={<Cakes />} />
          <Route path="/fruits" element={<Fruits />} />
          <Route path="/snacks" element={<Snacks />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;

