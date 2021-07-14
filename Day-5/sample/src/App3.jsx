import './App.css';
import React from 'react';
import  ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(){
        super();
        this.state={
            data:0
        }
        this.setNewNumber=this.setNewNumber.bind(this);
    };
    setNewNumber(){
       this.setState({data:this.state.data+1})
    };
    render() {
        return (
            <div>
               <button onClick={this.setNewNumber}>Increment</button>
               <Content myNumber={this.state.data}></Content>
            </div>
        );
    }

}

class Content extends React.Component
{
  componentWillMount(){
    console.log('Componenet Will Mount');
  }
  componentDidMount(){
    console.log('Componenet Did Mount');
  }
  componentWillReceiveProps(){
    console.log('Componenet Will Recieve Props');
  }
  shouldComponentUpdate(newProps,newState){
    return true;
  }
  componentWillUpdate(nextProps,nextState){
    console.log('Componenet Will Update');
  }
  componentDidUpdate(prevProps,preState){
    console.log('Componenet DID Update');
  }
  componentWillUnmount(){
    console.log('Componenet Will Mount');
  }

  render(){
      return(<div><h3>{this.props.myNumber}</h3></div>)
  }
}
export default App;
