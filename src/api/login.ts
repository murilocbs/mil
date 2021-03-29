import { LoginEntity } from "../model/login";
var Parse = require('parse/node');


export const isValidLogin = (loginInfo: LoginEntity): Promise<String> =>
new Promise((resolve) => {

  // back4app.com API, back-end server

  Parse.initialize("1ybNVpJEwnYREc2EQguMCjJxT71ek6LrC8udgcvv","tJrY3TYExWPMGrugqDHMjVoagQatIzWwvPmSQvUL");
  Parse.serverURL = 'https://parseapi.back4app.com/'
  const DBClass = Parse.Object.extend("test");
  const dbClas = new DBClass();

  // Check valid e-mail pattern

  var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  if((loginInfo.password === '') || (loginInfo.login === '')){
    
    // Empty field - code
    resolve('1') 

  }
  else if (!pattern.test(loginInfo.login)) {

    // Invalid email - code
    resolve('2') 

  }

  else{
    // Check login back-end
    const query = new Parse.Query(dbClas);
    query.equalTo("login", loginInfo.login);
    query.equalTo("password", loginInfo.password);
    query.find().then((results) => {
      if (typeof document !== 'undefined'){
          if(results.length === 1){
           
            // Logged - code
            resolve('3')

          }
          else{

            // Wrong data - code
            resolve('4')

          }
      }
      
    }, (error) => {
      if (typeof document !== 'undefined')
        console.error('Houve um erro ao logar.');
    });

  }
});