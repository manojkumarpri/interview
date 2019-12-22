import React,{Component}from'react';
export default class FlighterList extends Component{
    constructor(props){
        super(props);
        this.state={
            FlighterList:[
                {
                    Name:"AirIndia",
                    Origin:"coimbatore",
                    Destination:"chennai",
                    Price:"2500",
                    Rating:"4",
                },
                {
                    Name:"spicejet",
                    Origin:"coimbatore",
                    Destination:"chennai",
                    Price:"2000",
                    Rating:"3",
                },
            ],
            newitems:[],
            sortbyprice:"sortbyprice",
            sortbyrating:"sortbyrating",
            asc:true
        }
        this.state.newitems = JSON.parse(localStorage.getItem("list"));
        for(var i=0;i<this.state.newitems.length;i++){
          
            this.state.FlighterList.push(this.state.newitems[i]);
           
        }
        this.setState({FlighterList:this.state.FlighterList});
        
          
    }
    sortbyprice=()=>{
      if(this.state.asc==true){
           for(var j=0;j<this.state.FlighterList.length-1;j++){
               for(var k=j+1;k<this.state.FlighterList.length;k++){
              if(this.state.FlighterList[j].Price>this.state.FlighterList[k].Price){
            var c={};
            c=this.state.FlighterList[j];
            this.state.FlighterList[j]=this.state.FlighterList[k];
            this.state.FlighterList[k]=c;
            this.setState({FlighterList:this.state.FlighterList})

              }
            }
           }
           this.state.sortbyprice="sortbyprice(asc)";
           this.setState({sortbyprice:this.state.sortbyprice});
           this.setState({asc:false});
      } else{
        for(var j=0;j<this.state.FlighterList.length-1;j++){
            for(var k=j+1;k<this.state.FlighterList.length;k++){  
            if(this.state.FlighterList[j].Price<this.state.FlighterList[k].Price){
          var c={};
          c=this.state.FlighterList[j];
          this.state.FlighterList[j]=this.state.FlighterList[k];
          this.state.FlighterList[k]=c;
          this.setState({FlighterList:this.state.FlighterList})

            }
        }
         }
         this.state.sortbyprice="sortbyprice(desc)";
         this.setState({sortbyprice:this.state.sortbyprice});
         this.setState({asc:true});
      }
    }
    sortbyrating=()=>{
        if(this.state.asc==true){
            for(var j=0;j<this.state.FlighterList.length-1;j++){
                for(var k=j+1;k<this.state.FlighterList.length;k++){
               if(this.state.FlighterList[j].Rating>this.state.FlighterList[k].Rating){
             var c={};
             c=this.state.FlighterList[j];
             this.state.FlighterList[j]=this.state.FlighterList[k];
             this.state.FlighterList[k]=c;
             this.setState({FlighterList:this.state.FlighterList})
 
               }
             }
            }
            this.state.sortbyrating="sortbyrating(asc)";
            this.setState({sortbyrating:this.state.sortbyrating});
            this.setState({asc:false});
       } else{
         for(var j=0;j<this.state.FlighterList.length-1;j++){
             for(var k=j+1;k<this.state.FlighterList.length;k++){  
             if(this.state.FlighterList[j].Rating<this.state.FlighterList[k].Rating){
           var c={};
           c=this.state.FlighterList[j];
           this.state.FlighterList[j]=this.state.FlighterList[k];
           this.state.FlighterList[k]=c;
           this.setState({FlighterList:this.state.FlighterList})
 
             }
         }
          }
          this.state.sortbyrating="sortbyrating(desc)";
            this.setState({sortbyrating:this.state.sortbyrating});
            this.setState({asc:true});
       }
    }
    render(){
        return(
            <div>
         
                <div>
                    <table class="table">
  <thead>
    <tr>
      <th scope="col">sno</th>
      <th scope="col">FlightName</th>
      <th scope="col">Origin</th>
      <th scope="col">Destination</th>
      <th scope="col">Price</th>
      <th scope="col">Rating</th>
    </tr>
  </thead>
  <tbody>   {this.state.FlighterList.map((a,i)=>
    <tr>
      <th scope="row">{i+1}</th>
      
      <td>{a.Name}</td>
      <td>{a.Origin}</td>
      <td>{a.Destination}</td>
      <td>{a.Price}</td>
      <td>{a.Rating}</td>
    </tr>
    )}
  </tbody>
</table>
                </div>
           
            <input type="button" className="btn btn-success" onClick={()=>this.sortbyprice()} value={this.state.sortbyprice} />
         <br/>   <input type="button" className="btn btn-success" onClick={()=>this.sortbyrating()} value={this.state.sortbyrating} />
   
            </div>
        )
    }
}