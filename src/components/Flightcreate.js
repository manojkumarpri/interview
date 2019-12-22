import React,{Component}from'react';
export default class Flightcreate extends Component{
    constructor(props){
        super(props);
        this.state={
                flightobj:{},
                Name:"",
                Origin:"",
                Destination:"",
                Price:"",
                Rating:"",
                flightList:[],
          newitems:[]
        }
        
    }
    flightList=()=>{

        this.props.history.push('/flightlist');

    }
    handleSubmit=(event)=>{
        event.preventDefault();


      this.state.flightobj={
        Name:this.state.Name,
        Origin:this.state.Origin,
        Destination:this.state.Destination,
        Price:this.state.Price,
        Rating:this.state.Rating
      };

      this.setState({flightobj:this.state.flightobj});
      this.state.Name="";
      this.state.Origin="";
      this.state.Destination="";
      this.state.Price="";
      this.state.Rating="";
      this.state.flightList.push(this.state.flightobj);
  
            localStorage.setItem("list", JSON.stringify( this.state.flightList));

      console.log(this.state.flightobj);
    }
    render(){
        return(
            <div>
                <div  style={{textAlign:"center",fontWeight:"bold",fontSize:18}}>
                <label >The Flighter</label>
                </div>
                  <form onSubmit={(e)=>this.handleSubmit(e)} >
                  <div className="form-group">

        <label>
          Name:    </label>
          <input type="text" value={this.state.Name} className="form-control" required onChange={(evt)=>this.setState({Name:evt.target.value})} />
        
        </div>
        <div className="form-group">

        <label>
        Origin:     </label>
          <input type="text" value={this.state.Origin} className="form-control"  required onChange={(evt)=>this.setState({Origin:evt.target.value})} />
   
        </div>
        <div className="form-group">
        <label>
        Destination: </label>
          <input type="text" value={this.state.Destination} className="form-control"  required onChange={(evt)=>this.setState({Destination:evt.target.value})} />
       </div>
       <div className="form-group">
        <label>
        Price:  </label>
          <input type="text" value={this.state.Price}className="form-control"   required onChange={(evt)=>this.setState({Price:evt.target.value})} />
      </div>
      <div className="form-group">
        <label>
        Rating:</label>
          <input type="text" value={this.state.Rating}className="form-control"  required onChange={(evt)=>this.setState({Rating:evt.target.value})} />
        </div>
        <div style={{textAlign:"center"}}>
        <input type="submit" className="btn btn-success" value="Submit" />
        <input type="button" className="btn btn-success" value="FlightList" onClick={()=>this.flightList()} />
        </div>
      </form>
            </div>
        )
    }
}