import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';

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
  constructor(props){
    super(props);
    this.state={
      activeRoom: '',
    }
    this.setActiveRoom= this.setActiveRoom.bind(this);
  };

  setActiveRoom(room){
    this.setState({activeRoom: room})
  }

  render() {
    return (
      <div>
        <h1>Start Chattin Capin!</h1>
        <h2>{this.state.activeRoom.name}</h2>( 
        <RoomList firebase={firebase} setActiveRoom={this.setActiveRoom} />)
         { this.state.activeRoom}
          (<MessageList firebase={firebase} setActiveRoom={this.state.activeRoom.key} />)
        })
      </div>
    );
  }
}

export default App;
