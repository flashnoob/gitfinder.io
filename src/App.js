import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import PropTypes from 'prop-types'

import axios from "axios";
class App extends Component {
  state = {
    users: [],
    loading: false,
    showMessage:false
  };
 static propTypes={
}
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data, loading: false });
  }
searchUsers=async( text)=>{ 
  if (text.length>0) {
   
  this.setState({ loading: true,showMessage: false });

  const res = await axios.get(
    `https://api.github.com/search/users?q=${text} & client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  );
  this.setState({ users: res.data.items, loading: false ,});
 
  }
  else {  this.setState({ showMessage: true });
}
}
clearUsers=()=>{
  this.setState({users: [], loading: false})
}
  render() {
    return (
      <div className="App">
        <Navbar title=" Gitfinder.io" icon="fa fa-github" />
        <div className="container">
        <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={this.state.users.length>0?true:false}  showMessage={this.state.showMessage}   />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
