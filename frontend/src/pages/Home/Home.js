import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";
// import { Card, Button } from "react-bootstrap";
import api from "../../services/api";
import "./Home.css";

export default function Perfil() {

    const [casos, setCasos] = useState([]);
    const history = useHistory();
    const ongId = localStorage.getItem('ongId');
    const ongNome = localStorage.getItem('ongNome');

    useEffect(() => {
        api.get('perfil', {
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setCasos(response.data)
        })
    }, [ongId]);

    async function deletarCaso(id) {
        try {
            await api.delete(`casos/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });
            setCasos(casos.filter(caso => caso.id !== id));

        } catch (error) {
            alert('Erro ao deletar caso, tente novamente');
        }
    }

    function Logout() {
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="perfil-container">
            <header>
                {/* <img src={logoImg} alt="Seja Herói"></img> */}
                <h3>Bem vindo, {ongNome}</h3>

                <Link className="button" to="/casos/novo">Cadastrar novo caso</Link>
                <button onClick={Logout} type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {/* <Card>
                        <Card.Header as="h5">Featured</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card> */}
                {casos.map(caso => (
                    <li key={caso.id}>
                        <strong>CASO:</strong>
                        <p>{caso.titulo}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{caso.descricao}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(caso.valor)}</p>

                        <button onClick={() => deletarCaso(caso.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}