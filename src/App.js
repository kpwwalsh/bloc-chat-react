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
      activeRoom:{key:0, name:"" }
    }
    this.setActiveRoom= this.setActiveRoom.bind(this);
  };

  setActiveRoom(){
    this.setState.activeRoom({activeRoom:"room"})
  }

  render() {
    return (
      <div className="App">
        <RoomList firebase={firebase}
          setActiveRoom={function(newActiveRoom) {
            this.setState({ activeRoom: newActiveRoom });
          }.bind(this)}
        />
        <MessageList firebase={firebase} activeRoom={this.state.activeRoom} />
      </div>
    );
  }
}

export default App;

