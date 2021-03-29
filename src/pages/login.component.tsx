import * as React from "react";
import {useState} from 'react';
import makeStyles from "@material-ui/styles/makeStyles";
import createStyles from "@material-ui/styles/createStyles";
import Button from "@material-ui/core/Button";
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import { LoginEntity, createEmptyLogin } from "../model/login";

interface PropsForm {
  onLogin: (login: LoginEntity) => void;
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
      marginTop: 55,
      marginBottom: 75,
      color: 'white'
    }
  })
);

export const LoginComponent: React.FC<PropsForm> = (props) => {
  const { onLogin } = props;
  const [loginInfo, setLoginInfo] = React.useState<LoginEntity>(
    createEmptyLogin()
  );

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const classes = useFormStyles();
  const onTexFieldChange = (fieldId) => (e) => {
    setLoginInfo({
      ...loginInfo,
      [fieldId]: e.target.value,
    });
  };

  return (
    <div className={classes.formContainer}>
      <img src={require('../medsenior-logo.png')} className={classes.Logo} />
      <h3 className={classes.Title}>Entrar</h3>
      <TextField
        className={classes.Input}
        placeholder="Email"
        value={loginInfo.login}
        onChange={onTexFieldChange("login")}
        InputProps={{
          disableUnderline: true
        }}
      />
      <TextField
        className={classes.Input}
        placeholder="Senha"
        type={showPassword ? "text" : "password"}
        value={loginInfo.password}
        onChange={onTexFieldChange("password")}
        inputProps={{
          maxLength: 6,
        }}
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
      />

      <div className={classes.Account}>
          Não possui conta ainda? <Link to="/Register" className={classes.LinkAccount}>Registre-se aqui</Link>
      </div>

      <Button
        className={classes.BtnSubmit}
        variant="contained"
        onClick={() => onLogin(loginInfo)}
      >
        Entrar
      </Button>
  
    </div>
  );
};
