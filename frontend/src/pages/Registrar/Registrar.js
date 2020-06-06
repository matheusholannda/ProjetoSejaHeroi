import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import Seta from 'react-ionicons/lib/IosArrowForward'
import './Registrar.css';
import api from "../../services/api";
import logo from '../../assets/images/sejaheroi.png';

export default function Registrar() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const history = useHistory();

    async function realizaRegistro(event) {
        event.preventDefault();

        const data = { nome, email, whatsapp };

        try {
            const response = await api.post('ongs', data);
            alert(`seu ID de acesso: ${response.data.id}`);
            history.push('/')

        } catch (error) {
            alert('Erro no cadastro, tente novamente');
        }
    }

    return (
        <div className="cadastro-container">
            <div className="content">
                <section>
                    <img src={logo} alt="Seja Herói"></img>

                    <h1>Cadastre-se!</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG. Torne-se Herói!</p>

                    <Link className="back-link" to="/">
                        <Seta className="seta" color="#f57c00" />
                        Voltar
                    </Link>
                </section>

                <form onSubmit={realizaRegistro}>
                    <input placeholder="Nome"
                        value={nome}
                        onChange={event => setNome(event.target.value)}
                    />
                    <input type="email" placeholder="E-mail"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                    <input placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={event => setWhatsapp(event.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}