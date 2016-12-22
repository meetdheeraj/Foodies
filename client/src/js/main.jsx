
import 'file?name=[name].[ext]!../index.html';
import 'file?name=[name].[ext]!../css/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
var {browserHistory,hashHistory, Route, Router, IndexRoute}
  = require('react-router');

import About from './components/About.jsx';
import HomeComponent from './components/HomeComponent.jsx';
import Contact from './components/Contact.jsx';
import NavBarComponent from './components/NavBarComponent.jsx';
import Login from './components/Login.jsx';


class MainComponent extends React.Component{

render(){

return (
<div>



  <br/><br/><br/><br/>
    {this.props.children}
</div>
)
}
}
ReactDOM.render(
<Router history={hashHistory}>
             
             <Route path="/" component={MainComponent}>
             <IndexRoute component={HomeComponent}/>
             <Route path="/home" component={HomeComponent}/>
             <Route path="/FavNewsComponent" component={FavNewsComponent}/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
             <Route path="/Login" component={Login}/>
             </Route>


</Router>,document.getElementById('content'));

