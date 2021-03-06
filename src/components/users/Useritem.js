import React from 'react'
import PropTypes from 'prop-types'

 const Useritem =({user:{avatar_url,login,html_url}})=>{
    

        return ( 
            <div className='card text-center'>
              <img src={avatar_url} alt="" className="round-img" style={{width:'60px'}}/>  
            <h3>{login}</h3>
            <a href={html_url} className="btn btn-dark btm-sm">more</a>
            </div>
        )
}
Useritem.propTypes={
    user:PropTypes.object.isRequired,
}
export default Useritem
