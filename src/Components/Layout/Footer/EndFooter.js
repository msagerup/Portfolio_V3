import React, { Component } from 'react';
import { Footer, Row, Col } from 'react-materialize';
class EndFooter extends Component {
  render() {
    return (
      <Footer
        copyrights="&copy 2018 Copy Right"
        links={
          <ul>
            <li>
              <a className="grey-text text-lighten-3" href="#!">
                GitHub
              </a>
            </li>
            <li>
              <a className="grey-text text-lighten-3" href="#!">
                LinkedIn
              </a>
            </li>
            <li>
              <a className="grey-text text-lighten-3" href="#!">
                CodePen
              </a>
            </li>
            <li>
              <a className="grey-text text-lighten-3" href="#!">
                Email
              </a>
            </li>
          </ul>
        }
        className="grey darken-4 "
      >
        <h5 className="white-text">Contact Me </h5>
        <p className="grey-text text-lighten-4">
          Feel free to contact me, you can see that I can be contacted on
          several platforms. Please choose the one they is convenient for you
        </p>
      </Footer>
    );
  }
}

export default EndFooter;
