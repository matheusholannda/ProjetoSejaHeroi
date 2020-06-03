import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Axios from 'axios';
import Seta from 'react-ionicons/lib/IosArrowForward'
import logo from '../../assets/images/sejaheroi.png'
import './Login.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: ''
    }
  }

  atualizaEstadoEmail(event) {
    this.setState({ email: event.target.value })
  }

  atualizaEstadoSenha(event) {
    this.setState({ senha: event.target.value })
  }

  efetuaLogin(event) {
    event.preventDefault();

    Axios.post('', {
      email: this.state.email,
      senha: this.state.senha
    })
      .then(data => {
        console.log(data);
        localStorage.setItem("", data.data.token);
        this.props.history.push('/home')
      })
      .catch(erro => {
        console.log(erro);
      })
  }

  render() {
    document.title = 'Seja Herói'
    return (
      <div className="App">
        <div className="background">
        </div>
        <div className="opac">
          <div className="inputboxshadow">
            <div className="circulo">
              <img
                src={logo}
                alt="Logo Seja Herói" />
            </div>
            <form onSubmit={this.efetuaLogin.bind(this)}>
              <div className="inputs">
                <hr className="hr" />
                <span>Bem Vindo!</span>
                <div id="inputs">
                  <input
                    id="input"
                    value={this.state.email}
                    onChange={this.atualizaEstadoEmail.bind(this)}
                    type="email"
                    placeholder="E-mail"
                  />
                  <input
                    id="input"
                    value={this.state.senha}
                    onChange={this.atualizaEstadoSenha.bind(this)}
                    type="password"
                    placeholder="Senha"
                  />
                </div>
              </div>
              <div className="btn">
                <Link className="" to="/registrar">
                  <Seta color="#FFFFFF"/>
                  Não tenho cadastro.
                </Link>
                <input
                  type="submit"
                  value="Entrar" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}