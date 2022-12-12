import { useEffect } from "react"; //useReducer for more complex context.
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import NavigationBar from "./routes/navigationbar/navigationbar.route";
import Home from "./routes/home/home.route";
import Shop from "./routes/shop/shop.route";
import CategoriesPreview from "./routes/categories-preview/categoreis-preview.routes";
import Contact from "./routes/contact/contact.route";
import Authentication from "./routes/authentication/authentication.route";
import Checkout from "./routes/checkout/checkout.route";

import { setCurrentUser } from "./store/user/user.action";

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils.jsx";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, [
    dispatch,
    /* can place "dispatch" to remove warning but technically only mounts on initialization */
  ]);

  return (
    <Routes>
      <Route path="/ztm-crown-clothing" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
