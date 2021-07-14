import './App.css';
import React from 'react';
import  ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(){
        super();
        this.state={
            data:"Intial Data"
        }
        this.updateState=this.updateState.bind(this);
    };
    updateState(e){
        this.setState({data:e.target.value});
    }
    render(){
        return(<div><Content myDataProp={this.state.data} updateStateProp={this.updateState}></Content></div>);
    }
}


class Content extends React.Component
{
  render(){
    return (<div><input type="text" value={this.props.myDataProp}  onChange={this.props.updateStateProp} />
        <h3>{this.props.myDataProp}</h3>
      </div>);
  }
}
export default App;
