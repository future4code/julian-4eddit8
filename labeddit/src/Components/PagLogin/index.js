import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Styled from 'styled-components'

const DivForm = Styled.div`
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
    return (
        <>
            <DivForm>
                <div>
                    <TextField id="outlined-basic" label="Email" variant="outlined" type="email" />
                </div>
                <div className="input">
                    <TextField id="outlined-basic" label="Senha" variant="outlined" type="pass" />
                </div>
                <ButtonWidth >
                    <Button variant="contained" color="primary" disableElevation>
                        Entrar
                    </Button>
                </ButtonWidth>
                <div>
                    <Button variant="contained" color="primary" disableElevation>
                        Cadastrar
                    </Button>
                </div>
            </DivForm>
        </>

    )
}
