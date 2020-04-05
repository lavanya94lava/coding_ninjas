import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCqXcK7OLiUOCtQIQb_OuNUiySs3_AyQuQ",
  authDomain: "cart-93b84.firebaseapp.com",
  databaseURL: "https://cart-93b84.firebaseio.com",
  projectId: "cart-93b84",
  storageBucket: "cart-93b84.appspot.com",
  messagingSenderId: "830045208001",
  appId: "1:830045208001:web:e8d844021a7a370f204340"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <App />,
  document.getElementById('root')
);