import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useState} from 'react';


//display flex, justify

const ContainerCadastro = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`


function PagCadastro() {

  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userPass, setUserPass] = useState("")

  const OnClickRegister = () => {
    const newUser = {
      name: userName,
      email: userEmail,
      pass: userPass
      
    }
    console.log(newUser)
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
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />

        <br/>

         <TextField
          required
          id="outlined-required"
          label="Email"
          defaultValue=""
          variant="outlined"
          value={userEmail}
          onChange={e => setUserEmail(e.target.value)}
        />

        <br/>
       
        <TextField
            required
            id="outlined-password-input"
            label="Senha"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            value={userPass}
            onChange={e => setUserPass(e.target.value)}
          />

        <br/>
        
        <Button onClick={OnClickRegister} variant="contained" color="primary" disableElevation>Cadastrar</Button>
        
    
      </ContainerCadastro>
    );
  }
  
  export default PagCadastro;