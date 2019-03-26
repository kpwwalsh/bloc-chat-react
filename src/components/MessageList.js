import React, {Component} from 'react';
 
class MessageList extends Component {
    constructor(props){
        super(props)
        this.state = {
            messages: [],
            username: '',
            content: '',
            sentAt: '',
            roomId: ''
          };
        this.messagesRef = this.props.firebase.database().ref('messages');  
        this.createMessage= this.createMessage.bind(this);
        this.handleChange=this.handleChange.bind(this);
     }

     componentDidMount() {
        this.messagesRef.on('child_added', snapshot => {
        const message = snapshot.val();
        message.key = snapshot.key;
        this.setState({ messages: this.state.rooms.concat( message ) })
        });
      } 
    
      createMessage(e){
         e.preventDefault();
         this.messagesRef.push({
            username: this.state.username,
            content: this.state.content,
            sentAt: this.state.sentAt,
            roomId: this.state.roomId
        });
      this.setState({ username: '', content: '', sentAt:  '', roomId: ''});
         } 

      handleChange(e){
         e.preventDefault();
         this.setState({
             username: 'this.props.userName',
             content:  e.target.value,
             sentAt:   this.props.firebase.database.ServerValue.TIMESTAMP,
             roomId:   this.props.setActiveRoom
          });
       }

       render() {
         return(
           <div>
             <ul>
               {this.state.messages.filter( (message) => {
                 if (message.roomId === this.props.setActiveRoom) {
                   return <li key={ message.key }>{message.content} <br />
                     <span><h3>{message.username}</h3></span>
                   </li>
                   }
                   return (null);
                 })
               }
             </ul>
             <form onSubmit={this.createMessage}>
               <input type="text" value={this.state.content} onChange={this.handleChange} />
               <input type="submit" value="Submit Message" />
             </form>
           </div>
         );
       }
     
     }
     
     export default MessageList;
     

      