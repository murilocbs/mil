import * as React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Box from '@material-ui/core/Box';
import { Link } from "react-router-dom";

const divStyle = {
  Card: {
    background: '#f2f2f2',
    maxWidth: 350,
    margin: "0 auto",
  },
  Logo: {
    margin: "0 auto",
    maxWidth: '150px',
  },
  Logout:{
    fontSize: 18,
    textDecoration: 'none',
    color: '#eb5757',
  },
  Center:{
    textAlign: 'center' as const
  },
  Title:{
    marginTop: 55,
    textAlign: 'left' as const,
    color: '#219653',
    fontSize: 20
  },
  SubTitle:{
    textAlign: 'left' as const,
    color: '#616161',
    fontSize: 18
  },
  Text:{
    marginTop:12,
    textAlign: 'justify' as const,
    color: '#616161',
    fontSize: 14,
    lineHeight: 1.5
  },
  IP:{
    fontSize: 12,
    color: '#bdbdbd'
  }
};


export const Area = () => (
  <>
      <Card style={divStyle.Card}>
        <CardHeader/>
        <CardContent>
          <div style={divStyle.Center}>
            <img src={require('../medsenior-logo.png')} style={divStyle.Logo} />
            <h3 style={divStyle.Title}>Bem-Vindos!</h3>
            <div style={divStyle.SubTitle}>Agora você é um filiado!</div>
            <div style={divStyle.Text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a neque eros. 
            Praesent placerat, enim ut rhoncus rhoncus, arcu quam maximus est, non porttitor urna neque vel lorem. 
            Nullam libero ligula, finibus id congue vel, condimentum at ipsum. Ut neque justo, tincidunt hendrerit metus mattis,
            pretium imperdiet dolor. In cursus volutpat felis vel tincidunt. Integer nec faucibus metus, et lobortis urna. Vivamus hendrerit, 
            leo eget elementum suscipit, nunc tellus rutrum nisl, ut ultrices mi justo in risus.
            </div>
            <Box width="100%" mt={4} display="flex">
              <Box width="50%" pt={1} style={divStyle.IP}>ip: 000.000.000.000</Box>
              <Box width="50%"><Link to="/" style={divStyle.Logout}>Logout</Link></Box>
            </Box>
          </div>
        </CardContent>
      </Card>
  </>
  
);
