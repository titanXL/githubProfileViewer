import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Profile from './github/Profile.jsx';
import Search from './github/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'titanXL',
      userData: [],
      userRepos: [],
      perPage: 5
    }
  }

  getUserData() {
    $.ajax({
      url: 'https://api.github.com/users/' + this.state.username + '?client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret,
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ userData: data })
      }.bind(this),
      error: function (xhr, status, error) {
        this.setState({ username: null })
        alert(error)
      }.bind(this)
    })
  }



  getUserRepos() {
    $.ajax({
      url: 'https://api.github.com/users/' + this.state.username + '/repos?per_page' + this.state.perPage + '&client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret + '&sort=created',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ userRepos: data })
      }.bind(this),
      error: function (xhr, status, error) {
        this.setState({ username: null })
        alert(error)
      }.bind(this)
    })
  }

  handleFormSubmit(username) {
    this.setState({ username: username }, function () {
      this.getUserData();
      this.getUserRepos();
    })
  }

  componentDidMount() {
    this.getUserData();
    this.getUserRepos();
  }

  render() {
    return (
      <div>
        <Search onFormSubmit={this.handleFormSubmit.bind(this) }/>
        <Profile {... this.state}  />
      </div>
    )
  }
}

App.propTypes = {
  clientId: React.PropTypes.string,
  clientSecret: React.PropTypes.string
};
App.defaultProps = {
  clientId: '975bd1e2cf135e9363af',
  clientSecret: '0faa84bfdaf0c02c7593ceb55a365ef589d259bb'
}

export default App;