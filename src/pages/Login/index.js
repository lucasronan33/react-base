import React from "react";

import { Title, Paragrafo } from "./styles";
import { Container } from "../../styles/GlobalStyles";
import axios from "../../services/axios";

export default function Login() {

    React.useEffect(() => {
        async function getData() {
            const response = await axios.get('/pokemon')
            console.log(response.data.results)
        }
        getData()
    }, [])

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