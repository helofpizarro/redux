import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {MdShoppingBasket } from 'react-icons/md'
import {Container, Cart} from './style'

import logo from '../../assets/image/logo.svg'

 function Header({cartSize}) {
    return (
        <Container>
            <Link to='/'>
                <img src={logo} alt='RocketShoes'/>
            </Link>
            <Cart to='/cart'>
                <div>
                    <strong>Meu Carrinho</strong>
                    <span>{cartSize} itens</span>
                </div>
                <MdShoppingBasket size={36} color='#fff'/>
            </Cart>
        </Container>
    )
}

export default connect (state => ({
    cartSize: state.cart.length,
}))(Header)