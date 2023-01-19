import React from "react";
import axios from "axios";

class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
        res1  :"N/A",
        res2  :"N/A",
        res3  :"N/A",
        res4  :"N/A",
    }
  }
  
req1 = async ()=>{
  var res = await axios({
    method: 'get',
    url: '/res1only',
    headers:{'Access-Control-Allow-Origin': '*'}
  });
  console.log(res.data)
  this.setState({res1:res.data});
}
req2 = async ()=>{
  var res = await axios({
    method: 'get',
    url: '/res1and2',
    headers:{'Access-Control-Allow-Origin': '*'}
  });
  console.log(res.data)
  this.setState({res2:res.data});
}
req3 = async ()=>{
  var res = await axios({
    method: 'get',
    url: '/res2only',
    headers:{'Access-Control-Allow-Origin': '*'}
  });
  console.log(res.data)
  this.setState({res3:res.data});
}
req4 = async ()=>{
  var res = await axios({
    method: 'get',
    url: '/res2and1',
    headers:{'Access-Control-Allow-Origin': '*'}
  });
  console.log(res.data)
  this.setState({res4:res.data});
}

clearVals = () => {
  this.setState({res1:"N/A",res2:"N/A",res3:"N/A",res4:"N/A"});
};
  

  render() {
      
        return (
            <div className="Home">
                <h1>VPC Lattice Test</h1>
                <button onClick={()=>{this.req1()}}>Backend 1 Only Reponse: </button> <div>{this.state.res1}</div>
                <button onClick={()=>{this.req2()}}>Backend 1 and 2 Reponse: </button> <div>{this.state.res2}</div>
                <button onClick={()=>{this.req3()}}>Backend 2 Only Reponse: </button> <div>{this.state.res3}</div>
                <button onClick={()=>{this.req4()}}>Backend 2 and 1 Reponse: </button> <div>{this.state.res4}</div> 
                <button onClick={()=>{this.clearVals()}}>Clear</button>
            </div>
        );
    }
  }

export default Home;

