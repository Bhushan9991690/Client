import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Component/Body";
import Login from "./Component/Login";
import { Provider } from "react-redux";
import appStore from "./utils/store";
import Feed from "./Component/Feed";
import Profile from "./Component/Profile";
import Connections from "./Component/Connections";
import Request from "./Component/Request";
const App = () => {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/connections" element={<Connections />} />
            <Route path="/request" element={<Request />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
export default App;
