import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Styled from 'styled-components'
import axios from 'axios';
import useForm from '../PagCadastro/useForms';


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

    const [form, onChangeInput] = useForm({
        email: "",
        password: ""
      })
    
      const onClickRegister = (event) => {
        event.preventDefault()
        const BodyLogin = {
          "email": form.email,
          "password": form.password
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login', BodyLogin).then(function (response) {
          console.log(response.data);
          alert("Login efetuado com Sucesso")
        }).catch(function (error) {
          console.log(error);
          alert("deu erro")
          console.log(BodyLogin);

        });
    
      }

      
 


    return (
        <Container>
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    defaultValue=""
                    variant="outlined"
                    onChange={onChangeInput}
                    value={form['email']}
                    name={'email'}
                    type={'email'}
                />

            </div>
            <div className="input">
                <TextField
                    required
                    id="outlined-password-input"
                    label="Senha"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                    onChange={onChangeInput}
                    value={form['password']}
                    name={'password'}
                />
            </div>
            <ButtonWidth >
                <Button onClick={onClickRegister} variant="contained" color="primary" disableElevation>
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
