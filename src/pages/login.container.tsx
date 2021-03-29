import * as React from "react";
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { LoginEntity } from "../model/login";
import { isValidLogin } from "../api/login";
import { LoginComponent } from "./login.component";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import createStyles from "@material-ui/styles/createStyles";
import makeStyles from "@material-ui/styles/makeStyles";
import { NotificationComponent } from "../common";

const useFormStyles = makeStyles((theme) =>
  createStyles({
    card: {
      background: '#f2f2f2',
      maxWidth: 350,
      margin: "0 auto",
    },
  })
);

interface Props {}

export const LoginContainer: React.FC<Props> = (props) => {
  const history = useHistory();
  const [msg, setMsg] = useState('');
  const [isShowAlert, setShowAlert] = React.useState(false);
  const classes = useFormStyles();

  const loginSucceeded = (isValid: String) => {
    // login.ts API return
    if(isValid === '1'){
      setMsg('Preencha todos os campos.');
      setShowAlert(true);
    }
    else if(isValid === '2'){
      setMsg('E-mail inválido.');
      setShowAlert(true);
    }
    else if(isValid === '3'){
      history.push("/Area");
    }
    else if(isValid === '4'){
      setMsg('Dados incorretos.');
      setShowAlert(true);
    }
  };

  const handleLogin = (login: LoginEntity) => {
    isValidLogin(login).then(loginSucceeded);
  };

  return (
    <>
      <Card className={classes.card}>
        <CardHeader/>
        <CardContent>
          <LoginComponent onLogin={handleLogin} />
          <NotificationComponent
            show={isShowAlert}
            message = {msg}
            onClose={() => setShowAlert(false)}
          />
        </CardContent>
      </Card>
    </>
  );
};
