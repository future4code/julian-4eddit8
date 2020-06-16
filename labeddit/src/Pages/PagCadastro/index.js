import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import useForm from './useForms';



//display flex, justify

const ContainerCadastro = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`




function PagCadastro() {

  const [form, onChangeInput] = useForm({
    name: "",
    email: "",
    password: ""
  })

  const onClickRegister = (event) => {
    event.preventDefault()
    const BodySignUp = {
      "username": form.name,
      "email": form.email,
      "password": form.password
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup', BodySignUp).then(function (response) {
      console.log(response.data);
      alert("funcionou")
    }).catch(function (error) {
      console.log(error);
      console.log(BodySignUp);
      alert("deu erro")
    });

  }





  return (
    <ContainerCadastro>
      <h3>Cadastro novo usuário</h3>
      <TextField
        required
        id="outlined-required"
        label="Nome de usuário"
        defaultValue=""
        variant="outlined"
        onChange={onChangeInput}
        value={form['name']}
        name={'name'}
      />

      <br />

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

      <br />

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

      <br />

      <Button onClick={onClickRegister} variant="contained" color="primary" disableElevation>Cadastrar</Button>


    </ContainerCadastro>
  );
}

export default PagCadastro;