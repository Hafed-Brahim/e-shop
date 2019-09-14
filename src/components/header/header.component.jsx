import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import { ReactComponent as Logo} from '../../assets/logo.svg';

import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {signOutStart} from '../../redux/user/user.actions';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';

const Header = ({currentUser, hidden, signOutStart}) => (

    <div className = 'header'>
        <Link className = 'logo-container' to = '/'>
            <Logo className = 'logo'/>
        </Link>

        <div className = 'options'>
            <Link className = 'option' to = '/shop'>Shop</Link>
            <Link className = 'option' to = '/shop'>Contact</Link>
            {
                currentUser ?
                <div className = 'option' onClick = {signOutStart}>Sign out</div>
                :<Link className = 'option' to = '/sign'>Sign in</Link>
            }
            <CartIcon/>
        </div>
        {
            hidden 
            ? null
            : <CartDropdown/>
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
   signOutStart: () => dispatch(signOutStart()) 
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);