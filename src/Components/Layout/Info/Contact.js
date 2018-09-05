import React, { Component } from 'react';
import { Card, Row } from 'react-materialize';

class Contact extends Component {
  onSubmit = e => {
    e.preventDefault();
    console.log('clicked form');
  };

  render() {
    return (
      <React.Fragment>
        <Row>
          <h3 className=" grey-text text-darken-4 center-align small-margin">
            Drop me a message
          </h3>
          <h6
            className="center-align  letter-spacing"
            style={{ color: '#8cb59b' }}
          >
            I'd love to hear from you
          </h6>
        </Row>

        <Row>
          <form onSubmit={this.onSubmit} className="col s12">
            <Row>
              <div className="input-field col s12">
                <input
                  type="text"
                  id="first-name"
                  className="validate required"
                  required
                />
                <label htmlFor="first-name">First Name</label>
              </div>
            </Row>
            <Row>
              <div className="input-field col s12">
                <input
                  type="text"
                  id="last_name"
                  className="validate"
                  required
                />
                <label htmlFor="last_name">Last Name</label>
              </div>
            </Row>
            <Row>
              <div className="input-field col s12">
                <input type="email" id="e-mail" className="validate" required />
                <label htmlFor="email">E-Mail</label>
                <span
                  className="helper-text"
                  data-error="Not a valid E-mail."
                  data-success="E-mail is valid."
                />
              </div>
            </Row>
            <Row>
              <div class="input-field col s12">
                <textarea id="textarea1" class="materialize-textarea" />
                <label for="textarea1">Textarea</label>
              </div>
            </Row>
            <Row>
              <input type="submit" className="btn" />
            </Row>
          </form>
        </Row>
      </React.Fragment>
    );
  }
}

export default Contact;
