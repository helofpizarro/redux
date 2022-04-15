import React, {useState, useEffect} from 'react'

import {MdShoppingCart} from 'react-icons/md'

import {connect} from 'react-redux'

import { useDispatch} from 'react-redux'
import { bindActionCreators } from 'redux'
import {ProductList} from './style'

import * as CartActions from '../../store/modules/cart/actions'
import {addToCart} from '../../store/modules/cart/sagas'
import axios from 'axios'
import {formatPrice} from '../../util/format'


const Home = ({amount, addToCart}) => {
    console.log(addToCart)
    const [products, setProducts] = useState([])
    const dispatch = useDispatch()
    
    
    
    useEffect(() => {
        async function load(){
            const response = await axios.get('http://localhost:3333/products')
            
            
            const data = response.data.map(item => ({
                ...item,
                priceFormatted: formatPrice(item.price),
            }))
            setProducts(data) 
            
            
        }
        load() 
    })
    
       
       
        return (
            
            <ProductList>
                {products.map(item => (
                    <li key={item.id}>
                    <img src={item.image} alt={item.title}/>
                    <strong>{item.title}</strong>
                    <span>{item.priceFormatted}</span>
                    <button type='button' onClick={() => addToCart(item.id)}>
                        <div>
                            <MdShoppingCart size={16} color='#fff'/> 
                            {amount[item.id] || 0}
                            <span>Adicionar ao Carrinho</span>   
                        </div>
                    </button>
                </li>
                ))}
            </ProductList>
        )

    }

    
    
    const mapStateToProps = state => ({
        
        amount: state.cart.reduce((amount,product) => {
            amount[product.id] = product.amount
            
            return amount
        }, {})
            
            
        })
     
    
    const mapDispatchToProps = dispatch => 
        bindActionCreators(CartActions, dispatch)
    

    export default connect(mapStateToProps,mapDispatchToProps )(Home)
