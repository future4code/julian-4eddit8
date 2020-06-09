import React from 'react';
import styled from 'styled-components';
import {
    fade,
    ThemeProvider,
    withStyles,
    makeStyles,
    createMuiTheme,
  } from '@material-ui/core/styles';
  import Button from '@material-ui/core/Button';
  import InputBase from '@material-ui/core/InputBase';
  import InputLabel from '@material-ui/core/InputLabel';
  import TextField from '@material-ui/core/TextField';
  import FormControl from '@material-ui/core/FormControl';
  import { green } from '@material-ui/core/colors';

const ContainerFeed= styled.div`
    height: auto;
    width: 100vh;
    padding: 25px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

  const useStylesReddit = makeStyles((theme) => ({
    root: {
      border: '1px solid #e2e2e1',
      overflow: 'hidden',
      borderRadius: 4,
      backgroundColor: '#fcfcfb',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:hover': {
        backgroundColor: '#fff',
      },
      '&$focused': {
        backgroundColor: '#fff',
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
        borderColor: theme.palette.primary.main,
      },
    },
    focused: {},
  }));
  
  function RedditTextField(props) {
    const classes = useStylesReddit();
  
    return <TextField InputProps={{ classes, disableUnderline: true }} {...props} />;
  }
  

function PagFeed() {
    return (
      <div>
        <ContainerFeed>
        <RedditTextField
        label="Reddit"
        className=''
        defaultValue=''
        variant="filled"
        id="reddit-input"
      />
         <Button variant="outlined" size="small" color="primary" className=''>
          Postar
        </Button>
        </ContainerFeed>
            <hr/>
        <ContainerFeed>
            <h5>Nome de usuário</h5>
            <p>Exemplo de postagem aleatória</p>
            <br/>
            <button>+</button>
            <span>nº curtidas</span>
            <button>-</button>            
        </ContainerFeed>

        <hr/>

        <div>
            <h5>Nome de usuário</h5>
            <p>Exemplo de postagem aleatória</p>
            <br/>
            <button>+</button>
            <span>nº curtidas</span>
            <button>-</button>            
        </div>

        <hr/>

        <div>
            <h5>Nome de usuário</h5>
            <p>Exemplo de postagem aleatória</p>
            <br/>
            <button>+</button>
            <span>nº curtidas</span>
            <button>-</button>            
        </div>

        <hr/>

        <div>
            <h5>Nome de usuário</h5>
            <p>Exemplo de postagem aleatória</p>
            <br/>
            <button>+</button>
            <span>nº curtidas</span>
            <button>-</button>            
        </div>

        <hr/>
        

       

      </div>
    );
  }
  
  export default PagFeed;