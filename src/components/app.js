import React, { Component } from 'react';
import $ from 'jquery';
var response;

export default class App extends Component {

  constructor(props, context) {
         super(props, context);
         this.state = { token: '', URL: 'https://api.ativainvestimentos.com.br/security/token' };

         this.onSubmit = this.onSubmit.bind(this);
     }

   onSubmit() {
      const data = {
          'username': 'sciensa',
          'password': 'SCIENSA',
          'grant_type': 'password'
      }

      $.ajax({
        url: this.state.URL,
        type: 'POST',
        data,
        success: function end(res) {
           response = res;
        },
        error: function fail(err) {
          console.log(err);
        }
      });

      console.log(response);
    }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
            <div className="col-xs-3 col-md-3">
              <h1>Login</h1>
            </div>
        </div>
            <div>
                  <div>
                    <label>Usuário:</label>
                    <input type="text" className="form-control" id="usuario" placeholder="usuario"/>
                  </div>
            </div>
            <br />
            <div>
                  <div>
                    <label>Senha:</label>
                    <input type="password" className="form-control" id="password" placeholder="senha"/>
                  </div>
            </div>
            <br />
            <div>
                  <div>
                  <button type="submit" onClick={ () => this.onSubmit() }>Login</button>
                  </div>
            </div>
      </div>
    );
  }
}
