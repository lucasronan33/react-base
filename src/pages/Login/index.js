import React from "react";

import { Title, Paragrafo } from "./styles";
import { Container } from "../../styles/GlobalStyles";

export default function Login() {
    return (
        <Container>
            <Title>Hello world!
                <small>dsajkdja</small>
            </Title>
            <Paragrafo>
                Lorem ipsum dolor
            </Paragrafo>
            <button>Enviar</button>
        </Container>
    )
}