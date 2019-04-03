import React, { Component } from 'react';

class User extends Component{
  

  signIn() {
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup(provider);
  }

  signOut() {
    this.props.firebase.auth().signOut();
  }

  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged( user => {
      console.log({ user });
      this.props.setUser(user);
    });
  }

 
  render() {
    const displayName = this.props.currentUser ? this.props.currentUser.displayName : 'Guest';
    return(
      <div>
        <h3>{displayName}</h3>
        {!this.props.currentUser
          ?
            <button
              onClick={() => this.signIn()}
            >
              Sign In
            </button>
          :
            <button
              onClick={() => this.signOut()}
            >
              Sign Out
            </button>
        }
      </div>
    );
  }
}

export default User;