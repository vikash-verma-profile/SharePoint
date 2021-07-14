import './App.css';
import React from 'react';
import {Route,Link} from 'react-router-dom';
const Contacts=({match})=><p style={{marginLeft:10 }}>{match.params.id}</p>


class Contact extends React.Component {
    render(){
        const {url}=this.props.match
        return(
        <div><h1>Contact</h1>
         <ul>
            <li>
                <Link to="/contact/1">Contact1</Link>
            </li>
            <li> <Link to="/contact/2">Contact2</Link></li>
            <li> <Link to="/contact/3">Contact3</Link></li>
            </ul>
            <Route path="/contact/:id" component={Contacts}></Route>
        </div>
        )
    }
}

export default Contact;
