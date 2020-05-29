import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import { usuarioAutorizado } from './services/auth.js';
import * as serviceWorker from './serviceWorker';
import './index.css';

const Permissao = ({component : Component}) => (
    <Route 
        render = {props => usuarioAutorizado() ?
            (<Component {...props}/>) :
            (<Redirect to={{ pathname : '/', state : {from: props.location} }}/>)
        }
    /> 
);

const rotas = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact="/menu" component={Home}/>
                {/* <Permissao path="/menu" component={Home}/> */}
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
