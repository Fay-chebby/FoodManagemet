import { Link } from "react-router-dom";


export default function HomePage() {
    return (
        <div>
            <h1>Home Page</h1>
            <p>Welcome to the home page!</p>
            <button>
                <Link to="/signup" style={{ textDecoration: "none", color: "inherit" }}>
                    Login
                </Link>
            </button>
        </div>
    );
}