    import React from 'react';
    import PropTypes from "prop-types";
   
    const Profile = (props) => {
        Profile.propTypes = {
            anyProp: PropTypes.any,
            booleanProp: PropTypes.bool,
            numberProp: PropTypes.number,
            stringProp: PropTypes.string,
            functionProp: PropTypes.func
           };

    return (
    <>
        <h1>{props.handelName}</h1>
        <h1>{props.myname}</h1>
        <h2>{props.bio} </h2>
        <h2>{props.profession} </h2>
     
    </> 

    );
    }
    export default Profile ;