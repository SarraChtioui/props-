import React from 'react'
import propTypes from 'prop-types'
function Profile(props) {
    return (
        <div>
            <h1 style={{color:"gray"}}>{props.FullName}</h1>
            <h2 style={{color:"gray"}}>{props.Bio}</h2>
            <h4 style={{color:"gray"}}>{props.profession}</h4>
            <div>
                {props.children}
            </div>
            <button onClick={()=>props.handleName(props.FullName)}>show name</button>
        </div>
    )
}
Profile.defaultProps={
    FullName:"user name",
    Bio:"user bio",
    profession:"user profession",

}
Profile.propTypes={
    FullName:propTypes.string,
    Bio:propTypes.string,
    profession:propTypes.string,
    handleName:propTypes.func,
}
export default Profile
