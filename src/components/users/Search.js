import React, { Component } from 'react'

 class Search extends Component {
     state={
         text:''
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
</form>                
            </div>
        )
    }
}

export default Search
