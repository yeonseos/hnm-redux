/* eslint-disable */
import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";
import PrivateRoute from "./route/PrivateRoute";

// 1. 전체상품페이지, 로그인, 상품상세페이지
// 1-1. Navigation bar
// 2. 전체 상품페이지에서는 전체 상품을 볼 수 있다
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다
// 4. 상세페이지를 눌렀으나 로그인이 안 되어 있을 경우, 로그인페이지로 이동
// 5. 로그인이 되어있는 경우, 상세페이지 볼 수 있다
// 6. 로그아웃 버튼 클릭 => 로그아웃
// 7. 로그아웃하면 상세페이지 볼 수 없음, 다시 로그인 페이지 보임
// 8. 상품 검색 기능

function App() {
  const [authenticate, setAuthenticate] = useState(false); // true = login
  useEffect(() => {
    console.log("aaaa", authenticate);
  }, [authenticate]);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
