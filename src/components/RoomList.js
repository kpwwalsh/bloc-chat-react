import React, {Component} from 'react';
 
class RoomList extends Component {
    constructor(props){
        super(props)
        this.state = {
            rooms: [],
            name: ""
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
        e.preventDefault();
        this.roomsRef.push({
          name: this.state.newRoomName
        });
        this.setState({name:""});
      }

      handleChange(e){
        e.preventDefault();
        this.setState({
        name: e.target.value
        });
      }
      
      render(){ 
        return( 
          <div>
          <section>
            <ul>
           {this.state.rooms.map((room, index) => 
           <li key ={room.key} onClick={()=>this.props.setActiveRoom(index)}>{room.name}</li> 
           )}
            </ul>
          </section>
           <section>
            <form id="create-room" onSubmit={(e)=> this.createRoom(e)}>
             <input type="text"
              id="room"
              placeholder="add room"
              value={this.state.name}
              onChange={(e)=> this.handleChange(e)}
             />
             <button type="submit">Make Za Room</button>
           </form>
           </section>    
           </div> 
         );
        }
      }
      
  
    export default RoomList;

