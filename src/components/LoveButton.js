import React from "react";
import "./LoveButton.css";
import loveIcon from "../icons/love.svg";

class LoveButton extends React.Component {
    render() {
        return <div className="LoveButton">
            <img src={ loveIcon } alt="Love Icon"/>
        </div>;
    }
}

export default LoveButton;