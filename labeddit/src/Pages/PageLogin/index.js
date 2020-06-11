import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Styled from 'styled-components'
import { useState } from 'react'


const Container = Styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`
const ButtonWidth = Styled.div`
    margin: 15px;


`


export default function Login() {

    const [Email, setEmailValue] = useState("")
    const [Pass, setPassValue] = useState("")


    const onClickSendLogin = () => {
        const login = {
            email: Email,
            pass: Pass
        }
        console.log(login)
        setEmailValue('')
        setPassValue('')
    }



    return (
        <Container>
            <div>
                <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    type="email"
                    value={Email}
                    onChange={e => setEmailValue(e.target.value)}
                />

            </div>
            <div className="input">
                <TextField
                    id="outlined-basic"
                    label="Senha"
                    variant="outlined"
                    type="pass"
                    value={Pass}
                    onChange={e => setPassValue(e.target.value)}
                />
            </div>
            <ButtonWidth >
                <Button onClick={onClickSendLogin} variant="contained" color="primary" disableElevation>
                    Entrar
                    </Button>
            </ButtonWidth>
            <div>
                <Button variant="contained" color="primary" disableElevation>
                    Cadastrar
                    </Button>
            </div>
        </Container>

    )
}
