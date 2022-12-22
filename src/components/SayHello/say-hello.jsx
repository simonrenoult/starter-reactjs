import React from "react";
import "./say-hello.css";
import PropTypes from "prop-types";

export function SayHello(props) {
    return (
        <p>Hello {props.to}</p>
    );
}

SayHello.propTypes = {
    to: PropTypes.string
}