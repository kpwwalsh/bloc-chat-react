import React, {Component} from 'react';
 
class MessageList extends Component {
    constructor(props){
        super(props)
        this.state = {
            messages: [],
            username: '',
            displayName: this.props.currentUser,
            value: '',
            sentAt: '',
            roomId: '',
          };
        this.messagesRef = this.props.firebase.database().ref('Messages');  
        this.createMessage= this.createMessage.bind(this);
        this.handleChange=this.handleChange.bind(this);
     }

     componentDidMount() {
        this.messagesRef.on('child_added', snapshot => {
        const message = snapshot.val();
        message.key = snapshot.key;
        this.setState({ messages: this.state.messages.concat( message ) })
        });
      } 
    
      createMessage(e){
         e.preventDefault()
         this.messagesRef.push({
             username: this.props.user.displayName,
             content: this.state.value,
             sentAt:   this.props.firebase.database.ServerValue.TIMESTAMP,
             roomId:   this.props.activeRoom
        });
        this.setState({value:""});
      }

      handleChange(e){
        e.preventDefault();
        this.setState({
          value: e.target.value
        })
      }

          onSubmit(e) {
          e.preventDefault();
            this.messageRef.push({
              message: this.state.content,
            });   
       }

       render() {
         return(
           <div>
             <ul>
               {this.state.messages.map( (message) => {
                 if (message.roomId === this.props.activeRoom) {
                   return <li key={ message.key }>{message.content} <br />
                     <span><h3>{message.username}</h3></span>
                   </li>
                   }
                   return (null);
                 })
               }
             </ul>
             <form onSubmit={(e)=> this.createMessage(e)}>
               <input type="text" value={this.state.value} onChange={(e)=>this.handleChange(e)} />
               <input type="submit" value="Submit Message Now gd!!!" />
             </form>
           </div>
         );
       }
     
     }
     
     export default MessageList;
     

      