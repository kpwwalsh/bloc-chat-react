import React, {Component} from 'react';
 
class RoomList extends Component {
    constructor(props){
        super(props)
        this.state = {
            rooms: [],
            name: "",
            newRoomName: ''
          };
        this.roomsRef = this.props.firebase.database().ref('rooms');
        this.createRoom = this.createRoom.bind(this);
        this.handleChange = this.handleChange.bind(this);
     }
   
    componentDidMount() {
        this.roomsRef.on('child_added', snapshot => {
        const room = snapshot.val();
        room.key = snapshot.key;
        this.setState({ rooms: this.state.rooms.concat( room ) })
        });
      } 

      createRoom(e){
        this.roomsRef.push({
          name: this.state.newRoomName
        });
        this.setState({name:""});
      }

      handleChange(e){
        const newName= e.target.value;
        this.setState({
        newRoomName: newName  
        })
      }
      
      render(){ 
        return( 
          <div>
          <section>
           {this.state.rooms.map((room, index) => 
           <li key = {index}>{room.name}</li> 
            ) 
            }
          </section>
           <section>
            <form id="create-room" onSubmit={(e)=> this.createRoom(e)}>
             <input type="text"
              name="name"
              placeholder="add room"
              value={this.state.newRoomName}
              onChange={(e)=> this.handleChange(e)}
             />
             <input type="submit"/>
           </form>
           </section>    
           </div> 
         );
        }
      }
      
  
    export default RoomList;

