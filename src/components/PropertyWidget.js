import React from "react";
import "./PropertyWidget.css";

import PropertyCard from "./PropertyCard";

import arrowRight from "../icons/arrow_right.svg";
import arrowLeft from "../icons/arrow_left.svg";

class PropertyWidget extends React.Component {
    constructor(props) {
        super(props);
        this.showPopupModal = this.showPopupModal.bind(this);
    }

    showPopupModal() {
        this.props.showPopupModal();
    }

    render() {
        return <div className="PropertyWidget">
            <button className="circle-button"><img src={ arrowLeft } alt="Previous"/></button>
            <PropertyCard showPopupModal={ this.showPopupModal }/>
            <button className="circle-button"><img src={ arrowRight } alt="Next"/></button>
        </div>;
    }
}

export default PropertyWidget;