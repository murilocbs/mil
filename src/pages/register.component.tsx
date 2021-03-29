import * as React from "react";
import {useState} from 'react';
import makeStyles from "@material-ui/styles/makeStyles";
import createStyles from "@material-ui/styles/createStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import { RegisterEntity, createEmptyRegister } from "../model/register";

interface PropsForm {
  onRegister: (register: RegisterEntity) => void; //From Model
}

const useFormStyles = makeStyles((theme) =>
  createStyles({
    formContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    Logo: {
      maxWidth: '150px',
      margin: '0 auto',
    },
    Title:{
      marginTop: 55,
      textAlign: 'center',
      color: '#219653',
      fontSize: 20
    },
    Input:{
      marginBottom:20,
      border: 0,
      background: '#e1e1e1',
      padding: 12,
    },
    Account:{
      color: '#828282',
      fontSize: 12,
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    LinkAccount:{
      fontWeight: 'bold',
      marginLeft: 4,
      color: '#219653',
      textDecoration: 'none'
    },
    BtnSubmit:{
      padding:10,
      background: '#006631',
      width: '70%',
      margin: '0 auto',
      marginTop: 25,
      marginBottom: 75,
      color: 'white'
    }
  })
);

export const RegisterComponent: React.FC<PropsForm> = (props) => {
  const { onRegister } = props;
  const [registerInfo, setRegisterInfo] = React.useState<RegisterEntity>(
    createEmptyRegister()  //Creating Empty Model Form Data
  );

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  
  const classes = useFormStyles();
  const onTexFieldChange = (fieldId) => (e) => {
    setRegisterInfo({
      ...registerInfo,  //Setting register info
      [fieldId]: e.target.value,
    });
  };

  return (
    <div className={classes.formContainer}>
      <img src={require('../medsenior-logo.png')} className={classes.Logo} />
      <h3 className={classes.Title}>Novo registro</h3>
      <TextField
        className={classes.Input}
        placeholder="Email"
        value={registerInfo.login}
        onChange={onTexFieldChange("login")}
        InputProps={{
          disableUnderline: true
        }}
      />

      <TextField
        className={classes.Input}
        placeholder="Senha"
        type={showPassword ? "text" : "password"}
        value={registerInfo.password}
        inputProps={{maxLength: 6}}
        InputProps={{
          disableUnderline: true,
          endAdornment: (
            <InputAdornment position="end">
                <IconButton
                  aria-label="Password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          )
        }}
        onChange={onTexFieldChange("password")}
      />

      <TextField
        className={classes.Input}
        placeholder="Confirmar Senha"
        type="password"
        value={registerInfo.password2}
        inputProps={{maxLength: 6}}
        InputProps={{ disableUnderline: true}} 
        onChange={onTexFieldChange("password2")}
      />
      
      <Button
        className={classes.BtnSubmit}
        variant="contained"
        onClick={() => onRegister(registerInfo)}  //Call register
      >
        Registrar-se
      </Button>
 
    </div>
  );
};
