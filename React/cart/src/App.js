import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import * as firebase from 'firebase';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      products: [],
      loading:true
    }

    this.db = firebase.firestore();
  }

componentDidMount(){
//   firebase
//     .firestore()
//     .collection('products')
//     .get()
//     .then((snapshot) =>{
//       console.log(snapshot);
//       snapshot.docs.map((doc) =>{
//         console.log(doc.data);
//         return '';
//       });
//       const products  = snapshot.docs.map((doc) =>{
//         const data = doc.data();

//         data['id'] = doc.id;
//         return data;
//       });

//       this.setState({
//         products:products,
//         loading:false 
//       });
//     })
// }

//   handleIncreaseQuantity = (product) =>{
//     console.log("increase the quantity");
//     const {products} = this.state;
//     const index = products.indexOf(product);
//     products[index].qty +=1;   

//     this.setState({
//         products:products,
//     });

firebase
    .firestore()
    .collection('products')
    .onSnapshot((snapshot) =>{
      console.log(snapshot);
      snapshot.docs.map((doc) =>{
        console.log("Here is your data",doc.data);
        return '';
      });
      const products  = snapshot.docs.map((doc) =>{
        const data = doc.data();

        data['id'] = doc.id;
        return data;
      });

      this.setState({
        products:products,
        loading:false 
      });
    });
  }

  handleIncreaseQuantity = (product) =>{
    console.log("increase the quantity");
    const {products} = this.state;
    const index = products.indexOf(product);
    // products[index].qty +=1;   

    // this.setState({
    //     products:products,
    // });
    const docRef = this.db.collection('products').doc(products[index].id);
    docRef
      .update({
        qty:products[index].qty+1
      })
      .then(() =>{
        console.log('Update success');
      })
      .catch((err) =>{
        console.log('Error: ', err);
      })
}

handleDecreaseQuantity = (product) =>{
  console.log("decrease the quantity");
  const {products} = this.state;
  const index = products.indexOf(product);
  if(products[index].qty ===0){
      return;
  }
  // products[index].qty -=1;   

  //     this.setState({
  //         products:products,
  //     });

  const docRef = this.db.collection('products').doc(products[index].id);
    docRef
      .update({
        qty:products[index].qty-1
      })
      .then(() =>{
        console.log('Update success');
      })
      .catch((err) =>{
        console.log('Error: ', err);
      })
  }

  handleDeleteProduct = (id) =>{
      // const {products} = this.state;
      // const items = products.filter((item) => item.id !== id);
      // this.setState({
      //     products:items
      // });
      const docRef = this.db.collection('products').doc(id);

      docRef
        .delete()
        .then(() =>{
          console.log("Deleted Successfully");
        })
        .catch((err) =>{
          console.log("Err: ", err);
        })
        ;
  }

  getCartCount = () =>{
    const {products} = this.state;
    let count = 0;
    products.forEach((product) =>{
      count += product.qty;
    });
    return count;
  }

  getCartTotal = () =>{
    const {products} = this.state;
    let cartTotal = 0;
    products.map((product) => {
      cartTotal= cartTotal+ product.qty * product.price;
      return '';
    });
    return cartTotal;
  }

  addProduct = ()=>{
    this.db
      .collection('products')
      .add({
        img:'',
        price: 7000,
        qty:4,
        title:"washing machine"
      })
      .then((docRef) => {
        console.log('Product has been added',docRef);
      })
      .catch((err) =>{
        console.log('Error: ',err);
      })
  }

  render(){
    const {products, loading} = this.state;
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()}/>
        <button onClick = {this.addProduct} style = {{padding:20, fontSize:20}}>Add a Product</button>
        <Cart 
        products = {products}
        onIncreaseQuantity = {this.handleIncreaseQuantity}
        onDecreaseQuantity = {this.handleDecreaseQuantity}
        onDeleteProduct = {this.handleDeleteProduct}
        />
        {loading && <h1>Loading Products...</h1>}
        <div style = {{padding:10,fontSize:20}}>
          Total: {this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
