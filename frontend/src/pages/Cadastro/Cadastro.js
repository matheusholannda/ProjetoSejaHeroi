import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import Seta from 'react-ionicons/lib/IosArrowForward'
import './Cadastro.css';
import api from "../../services/api";
import logo from '../../assets/images/sejaheroi.png';

export default function NovoCaso() {

    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const history = useHistory();
    const ongId = localStorage.getItem('ongId');
    const ongNome = localStorage.getItem('ongNome');

    async function cadastrarNovoCaso(event) {
        event.preventDefault();

        const data = { titulo, descricao, valor, whatsapp, }

        try {
            await api.post('casos', data, {
                headers: {
                    Authorization: ongId,
                }
            })
            
            alert('Caso cadastrado com sucesso!')
            history.push('/perfil');

        } catch (error) {
            alert('Erro ao cadastrar caso, tente novamente!')
        }
    }

    return (
        <div className="novo-caso-container">
            <div className="content">
                <section>
                    <img src={logo} alt="Seja Herói"></img>

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso especificadamente para um herói te ajudar a solucioná-lo.</p>

                    <Link className="back-link" to="/perfil">
                        <Seta className="seta" color="#f57c00"/>
                        Voltar ao início
                    </Link>
                </section>

                <form onSubmit={cadastrarNovoCaso}>
                    <input
                        placeholder="Título do caso"
                        value={titulo}
                        onChange={event => setTitulo(event.target.value)}
                    />
                    <textarea
                        placeholder="Descrição"
                        value={descricao}
                        onChange={event => setDescricao(event.target.value)}
                    />
                    <input
                        placeholder="Valor"
                        value={valor}
                        onChange={event => setValor(event.target.value)}
                    />
                    <input
                        placeholder="Telefone para contato"
                        value={whatsapp}
                        onChange={event => setWhatsapp(event.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}