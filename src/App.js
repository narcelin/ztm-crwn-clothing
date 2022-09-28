import { Routes, Route } from "react-router-dom";

import NavigationBar from "./routes/navigationbar/navigationbar.route";
import Home from "./routes/home/home.route";
import Shop from "./routes/shop/shop.route";
import Contact from "./routes/contact/contact.route";
import Authentication from "./routes/authentication/authentication.route";
import SandBox from "./routes/sandbox/sandbox.route";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="sandbox" element={<SandBox />} />
      </Route>
    </Routes>
  );
};

export default App;
