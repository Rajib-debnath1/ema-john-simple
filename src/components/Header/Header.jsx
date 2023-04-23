import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {

    const {user} = useContext(AuthContext);
    console.log(user)
    return (
        <nav className='header'>
            <img src={logo} alt=''></img>
           <div>
                <Link to="/">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                {user && <span>Welcome {user.displayName}</span>}
           </div>
        </nav>
    );
};

export default Header;