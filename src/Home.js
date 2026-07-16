import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>

      <Link to="/products">
        <button>Danh sách sản phẩm</button>
      </Link>

    </div>
  );
}

export default Home;