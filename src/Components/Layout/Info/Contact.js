import React, { Component } from 'react';
import { Card } from 'react-materialize';

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <form action="" className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input type="text" id="first_name" />
                <label htmlFor="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input type="text" id="last_name" />
                <label htmlFor="first_name">Last Name</label>
              </div>
            </div>
          </form>
        </div>
        <div className="row">
          <div class="input-field col s12">
            <input id="email" type="email" class="validate" />
            <label for="email">Email</label>
          </div>
        </div>
        <div className="row">
          <div class="row">
            <div class="input-field col s12">
              <textarea id="textarea1" class="materialize-textarea" />
              <label for="textarea1">Write your message...</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
