import React from "react";

import { Title, Paragrafo } from "./styles";
import { Container } from "../../styles/GlobalStyles";
import axios from "../../services/axios";
import { useDispatch } from "react-redux";
import * as actions from "../../store/modules/example/actions";

export default function Login() {

    const dispatch = useDispatch()
    function handleClick(e) {
        e.preventDefault()

        dispatch(actions.clicaBotao())
    }

    return (
        <Container>
            <Title>Hello world!
                <small>dsajkdja</small>
            </Title>
            <Paragrafo>
                Lorem ipsum dolor
            </Paragrafo>
            <button onClick={handleClick}>Enviar</button>
        </Container>
    )
}