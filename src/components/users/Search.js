import React, { Component } from 'react'
import PropTypes from 'prop-types'

 class Search extends Component {
     state={
         text:''
     }
     static propTypes={
        searchUsers:PropTypes.func.isRequired,
        clearUser:PropTypes.func.isRequired,
    showClear:PropTypes.bool.isRequired,
    }
     submitForm=(e)=>{ 
   e.preventDefault();
   this.props.searchUsers(this.state.text)

    }
     onChange=e=>this.setState({text:e.target.value})
    render() {
        return (
            <div>
<form className="form" onSubmit={this.submitForm}>
    <input type="text" input="text" placeholder="search" value={this.state.text} onChange={this.onChange}/>
    <input type="submit" value="Search" className="btn btn-dark btn-block" />
    {this.props.showMessage && <h4 className='text-center text-danger my'>Please enter a username!!</h4>}

</form> {this.props.showClear&&  <button className="btn btn-light btn-block" onClick={this.props.clearUsers}>Clear</button>}
              
            </div>
        )
    }
}

export default Search
