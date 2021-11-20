import React, { useState } from "react";
import { Container, Form } from "./styles";
import logo from "../../assets/wolf-vector.png";
import Modal from "react-modal";
import axios from 'axios';

export function Header() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [nomeevento, setNomeevento] = useState("");
    const [local, setLocal] = useState("");
    const [diasemana, setDiasemana] = useState("");
    const [horario, setHorario] = useState("");
    
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    
    
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost:3333/events',
            data: { 
                nomeevento, 
                local, 
                diasemana, 
                horario 
            }
        })
        .then(response => {
            console.log(response.data);

            setNomeevento("");
            setLocal("");
            setDiasemana("");
            setHorario("");
            setIsOpen(false);
        })
        .catch(error => {
            console.log(error);
        })
    }


    return (
        <Container>
            <div className="logo">
                <img src={logo} />
                <strong>Venancin</strong>
            </div>

            <button onClick={openModal} >
                <svg viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                </svg>
            </button>


            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                style={customStyles}
            >
                <button onClick={closeModal} className="close-btn" >
                    <svg viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                    </svg>
                </button>

                <Form onSubmit={handleSubmit} >
                    <h2>Faça o Cadastro de suas informações</h2>

                    <input placeholder="nome do evento" value={nomeevento} onChange={(event) => { setNomeevento(event.target.value)}} />
                    <input placeholder="local do evento" value={local} onChange={(event) => {setLocal(event.target.value)}} />
                    <input placeholder="dia da semana" value={diasemana} onChange={(event) => {setDiasemana(event.target.value)}} type="date" />
                    <input placeholder="horário" value={horario} onChange={(event) => { setHorario(event.target.value) }} type="time" />

                    <button type="submit" > Cadastrar </button>
                </Form>
            </Modal>
        </Container>
    );
}