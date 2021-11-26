import React from 'react';
import PropTypes from "prop-types";

const Pics = (props) => {
    Pics.propTypes = {
        anyProp: PropTypes.any,
        booleanProp: PropTypes.bool,
        numberProp: PropTypes.number,
        stringProp: PropTypes.string,
        functionProp: PropTypes.func
       };
    return (
      <div>
        <img src={props.src} alt=""/>
        {props.children}
      </div>
    )
  }
  

export default Pics ;