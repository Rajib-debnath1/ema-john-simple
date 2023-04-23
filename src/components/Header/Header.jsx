import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {

    const {user, logOut} = useContext(AuthContext);
    console.log(user)

    const handleSignOut = () =>{
        logOut()
        .then(result =>{})
        .catch(error => console.log(error))
    }

    return (
        <nav className='header'>
            <img src={logo} alt=''></img>
           <div>
                <Link to="/">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                {user && <span className='text-white'> {user.email} <button onClick={handleSignOut}>Log Out</button></span>}
           </div>
        </nav>
    );
};

export default Header;