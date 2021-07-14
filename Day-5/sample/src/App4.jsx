import './App.css';
import React from 'react';
import PropTypes from 'prop-types'

class App extends React.Component {
    render() {
        return (
            <div>
                <h3>Array:{this.props.propArray}</h3>
                <h3>Bool:{this.props.propBool}</h3>
                <h3>Func:{this.props.propFunc(3)}</h3>
            </div>
        );
    }

}

App.propTypes={
    propArray:PropTypes.array.isRequired,
    propBool:PropTypes.bool.isRequired,
    propFunc:PropTypes.func
}

App.defaultProps={
    propArray:[1,2,3,4,5],
    propBool:true,
    propFunc:function(e){return e}
}
export default App;
