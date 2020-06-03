import React, { Component } from 'react';
import Axios from 'axios';
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

  efetuaLogin(event){
    event.preventDefault();

    Axios.post('', {
      email : this.state.email,
      senha : this.state.senha
    })
    .then(data => {
      console.log(data);
      localStorage.setItem("", data.data.token);
      this.props.history.push('/home')
    })
    .catch(erro=>{
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
              <hr />
              <span>Bem Vindo!</span>
              <div className="email">
                <input
                  id="input"
                  value={this.state.email}
                  onChange={this.atualizaEstadoEmail.bind(this)}
                  type="email"
                  placeholder="E-mail"
                />
                {/* <img
                  src={info}
                  alt="Informação"
                  title="Insira o seu e-mail cadastrado no sistema"
                /> */}
              </div>
              <div className="senha">
                <input
                  id="input"
                  value={this.state.senha}
                  onChange={this.atualizaEstadoSenha.bind(this)}
                  type="password"
                  placeholder="Senha"
                />
                {/* <img
                  src={info}
                  alt="Informação"
                /> */}
              </div>
            </div>
            <div className="btn">
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