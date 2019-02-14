import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';

import './App.css';

import CommentsBox from './components/CommentsBox';
import CommentsList from './components/CommentsList';

class App extends Component {

  renderButton () {
    if (this.props.auth) {
      return <button onClick={() => this.props.onChangeAuth(false)}>Sign Out</button>;
    } else {
      return <button onClick={() => this.props.onChangeAuth(true)}>Sign In</button>;
    }
  }

  renderHeader () {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post a Comment</Link>
        </li>
        <li>
          {this.renderButton()}
        </li>
      </ul>
    )
  }

  render() {
    return (
      <div className="App">
        {this.renderHeader()}
        <Route path="/post" component={CommentsBox} />
        <Route path="/" exact component={CommentsList} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeAuth: (isLoggedIn) => dispatch(actions.changeAuth(isLoggedIn))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
