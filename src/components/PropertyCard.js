import React from "react";
import "./PropertyCard.css";

import PropertyImage from "./PropertyImage";
import LabelDefault from "./LabelDefault";
import LabelRounded from "./LabelRounded";
import LoveButton from "./LoveButton";

import kamarMandiIcon from "../icons/kamar_mandi.svg";
import kamarTidurIcon from "../icons/kamar_tidur.svg";
import luasTanahIcon from "../icons/luas_tanah.svg";
import luasBangunanIcon from "../icons/luas_bangunan.svg";

class PropertyCard extends React.Component {
    render() {
        return <div className="PropertyCard">
            <PropertyImage/>
            <div className="status-information">
                <LabelDefault/>
                <LabelRounded/>
                <LoveButton/>
            </div>
            <div className="price-information">
                <b className="real-price">Rp 326 jt</b>&nbsp;Cicilan Rp 2,61jt/bln
            </div>
            <div className="property-information">
                <div className="property-icon">
                    <img src={ kamarTidurIcon } alt="Kamar tidur Icon"/>&nbsp;2&nbsp;K.Tidur
                </div>
                <div className="property-icon">
                    <img src={ kamarMandiIcon } alt="Kamar mandi Icon"/>&nbsp;2&nbsp;K.Mandi
                </div>
                <div className="property-icon">
                    <img src={ luasBangunanIcon } alt="Luas bangunan Icon"/>&nbsp;62m2
                </div>
                <div className="property-icon">
                    <img src={ luasTanahIcon } alt="Luas bangunan Icon"/>&nbsp;65m2
                </div>
                <button className="property-button" onClick={ this.props.showPopupModal }>Lihat Detail</button>
            </div>
        </div>;
    }
}

export default PropertyCard;