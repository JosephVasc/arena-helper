import React from 'react';
import Nav from '../Nav/Nav'

export default class Header extends React.Component {
  render() {
    return (
      <div className="jumbotron m-auto">
        <h1 className="d-flex justify-content-center">Financial Freedom</h1>
          <Nav />
      </div>
    );
  } 
}
