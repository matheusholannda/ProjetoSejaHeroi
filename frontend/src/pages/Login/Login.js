import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";
import logo from '../../assets/images/sejaheroi.png';
import './Login.css';

export default function Login() {

  //#region CONST
  const [id, setId] = useState('');
  const history = useHistory();
  //#endregion

  //#region POST
  async function login(event) {
    event.preventDefault();

    try {
      const response = await api.post('login', { id });
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongNome', response.data.nome);
      history.push('/perfil')

    } catch (error) {
      alert('Falha no login, tente novamente');
    }
  }
  //#endregion

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
          <form onSubmit={login}>
            <div className="inputs">
              <hr className="hr" />
              <span>Bem Vindo!</span>
              <div id="inputs">
                <input
                  id="input"
                  placeholder="Sua ID"
                  value={id}
                  onChange={event => setId(event.target.value)}
                />
                {/* <input
                  id="input"
                  value={this.state.senha}
                  onChange={this.atualizaEstadoSenha.bind(this)}
                  type="password"
                  placeholder="Senha"
                /> */}
              </div>
            </div>
            <div className="btn">
              <Link className="" to="/registrar">
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