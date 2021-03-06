import React from 'react';

const CartItem = (props) =>{

        const {price, title, qty} = props.product;
        const {product,
               onDecreaseQuantity, 
               onIncreaseQuantity,
               onDeleteProduct } = props;
        return(
            <div className = "cart-item">
                <div className= "left-block">
                    <img style = {styles.image} alt = ""/>
                </div>
                <div className = "right-block">
                    <div style = {{fontSize:25}}> {title} </div>
                    <div style = {{color:'#777'}}> {price} </div>
                    <div style = {{color:'#777'}}>{qty}</div>
                    <div className = "cart-item-actions">
                        {/*Buttons*/}
                        <img 
                        alt = "increase" 
                        className = "action-icons"
                        src ="https://image.flaticon.com/icons/svg/2089/2089588.svg"
                        onClick= {() => onIncreaseQuantity(product)}/>
                        <img
                        alt = "decrease"
                        className = "action-icons" 
                        src ="https://image.flaticon.com/icons/svg/1828/1828906.svg"
                        onClick = {() => onDecreaseQuantity(product)}/>
                        <img 
                        alt = "delete"
                        className = "action-icons" 
                        src ="https://image.flaticon.com/icons/svg/1214/1214428.svg"
                        onClick = {() => onDeleteProduct(product.id)}
                        />
                    </div>
                </div>
            </div>
        );
    }
const styles = {
    image:{
        height:100,
        width:100,
        borderRadius:4,
        background:'#ccc'
    }
}

export default CartItem;