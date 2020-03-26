import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            price:999,
            title:'Phone',
            qty:1,
            img:''
        }
    }
    increaseQuantity = () =>{
        console.log("this",this.state);
        // this.setState({
        //     qty:this.state.qty+1
        // });

        //if previous state is required
        this.setState((preState) => {
            return {
                qty: preState.qty+1
            }
        });
    }
    render(){
        const {price, title, qty} = this.state;
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
                        onClick= {this.increaseQuantity}/>
                        <img alt = "decrease" className = "action-icons" src ="https://image.flaticon.com/icons/svg/1828/1828906.svg"/>
                        <img alt = "delete" className = "action-icons" src ="https://image.flaticon.com/icons/svg/1214/1214428.svg"/>
                    </div>
                </div>
            </div>
        );
    }
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