import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Offers from "./pages/Offers";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgetPassword from "./pages/ForgetPassword";
function App() {
  return (
    // <h1>Hello World!</h1>
    <Router>
    <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/profile" element = {<Profile />} />
        <Route path="/offers" element = {<Offers />} />
        <Route path="/sign-in" element = {<SignIn />} />
        <Route path="/sign-up" element = {<SignUp />} />
        <Route path="/forget-password" element = {<ForgetPassword />} />
    </Routes>
 </Router>
  );
}

export default App;
