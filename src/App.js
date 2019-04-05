import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User';

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
      user: '',
    }
   this.setActiveRoom= this.setActiveRoom.bind(this);
  };

  setActiveRoom(room){
    this.setState({activeRoom: room});
  }

  setUser(user){
    this.setState({user: user});
  }

  render() {
    return (
      <div>
        <h1>ChatAt</h1>
        <User firebase={firebase} currentUser={this.state.user} setUser={user=>this.setUser(user)}/>
        <h2>{this.state.activeRoom.name}</h2>
        <RoomList firebase={firebase} setActiveRoom={this.setActiveRoom} />
         { this.state.activeRoom}
         <MessageList firebase={firebase} activeRoom={this.state.activeRoom} user={this.state.user}
        />
      </div>
    );
   }
 }

export default App;
