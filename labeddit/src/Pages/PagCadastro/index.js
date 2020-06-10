import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

//display flex, justify

const ContainerCadastro = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`


function PagCadastro() {
    return (
      <ContainerCadastro>
        <h3>Cadastro novo usuário</h3>
        <TextField
          required
          id="outlined-required"
          label="Nome de usuário"
          defaultValue=""
          variant="outlined"
        />

        <br/>

         <TextField
          required
          id="outlined-required"
          label="Email"
          defaultValue=""
          variant="outlined"
        />

        <br/>
       
        <TextField
            required
            id="outlined-password-input"
            label="Senha"
            type="password"
            autoComplete="current-password"
            variant="outlined"
          />

        <br/>
        
        <Button variant="contained" color="primary" disableElevation>Cadastrar</Button>
        
    
      </ContainerCadastro>
    );
  }
  
  export default PagCadastro;