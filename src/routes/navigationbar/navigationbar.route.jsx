import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { ReactComponent as CrwnLogo } from "./../../assets/crown.svg";
import { CartContext } from "../../contexts/cart.contexts";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import { selectCurrentUser } from "../../store/user.selector";

import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinksContainer,
} from "./navigation.styles.jsx";

const NavigationBar = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutHandler}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
