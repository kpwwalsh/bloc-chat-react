import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import * as uuid from 'uuid';

  var config = {
    apiKey: "AIzaSyAX0XklFlFeiqQ_Rsw88_iuGpPnvdy6UH0",
    authDomain: "bloc-chat-ba747.firebaseapp.com",
    databaseURL: "https://bloc-chat-ba747.firebaseio.com",
    projectId: "bloc-chat-ba747",
    storageBucket: "bloc-chat-ba747.appspot.com",
    messagingSenderId: "845660248798"
  };
  firebase.initializeApp(config);


class App extends Component {
  render() {
    return (
      <div className="App">
   <RoomList firebase={firebase}/>
      </div>
    );
  }
}

export default App;
