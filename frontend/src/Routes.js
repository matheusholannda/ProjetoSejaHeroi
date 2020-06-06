import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Perfil from './pages/Perfil/Perfil';
import Cadastro from './pages/Cadastro/Cadastro';
import Registrar from './pages/Registrar/Registrar';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/perfil" component={Perfil} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/registrar" component={Registrar} />
            </Switch>
        </BrowserRouter>
    )
}