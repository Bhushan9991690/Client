import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Profile from "./component/Profile";
import Body from "./component/Body";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
