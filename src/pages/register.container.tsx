import * as React from "react";
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { RegisterEntity } from "../model/register";
import { isValidRegister } from "../api/register";
import { RegisterComponent } from "./register.component";
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

export const RegisterContainer: React.FC<Props> = (props) => {
  const history = useHistory();
  const [msg, setMsg] = useState('');
  const [isShowAlert, setShowAlert] = React.useState(false);
  const classes = useFormStyles();

  const registerSucceeded = (isValid: String) => {
    // register.ts API return
    if(isValid === '1'){
      setMsg('Preencha todos os campos.');
      setShowAlert(true);
    }
    else if(isValid === '2'){
      setMsg('E-mail inválido.');
      setShowAlert(true);
    }
    else if(isValid === '3'){
      setMsg('Senhas incompatíveis.');
      setShowAlert(true);
    }
    else if(isValid === '4'){
      setMsg('Login em uso, escolha outro.');
      setShowAlert(true);
    }
    else if (isValid === '5') {
      history.push("/Area");
    }
    
  };

  const handleRegister = (register: RegisterEntity) => {
    isValidRegister(register).then(registerSucceeded);
  };

  return (
    <>
      <Card className={classes.card}>
        <CardHeader/>
        <CardContent>
          <RegisterComponent onRegister={handleRegister} //From Component
          /> 
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
