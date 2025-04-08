import { Link, useNavigate } from "react-router";
import "./App.css";
import Blogs from "./Components/Blogs";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="text-green-500 text-2xl"></h1>

      <div>
        <button
          onClick={() => navigate("/login")}
          className="btn bg-primary mx-5"
        >
          Login
        </button>

        <button
          onClick={() => navigate("/logout")}
          className="btn bg-accent text-black"
        >
          Logout
        </button>
      </div>

      <Blogs></Blogs>
    </>
  );
}

export default App;
