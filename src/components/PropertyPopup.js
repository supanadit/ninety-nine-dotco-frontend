import "./PropertyPopup.css";
import React from "react";
import LabelDefault from "./LabelDefault";
import LabelRounded from "./LabelRounded";
import LoveButton from "./LoveButton";
import kamarTidurIcon from "../icons/kamar_tidur.svg";
import kamarMandiIcon from "../icons/kamar_mandi.svg";
import luasBangunanIcon from "../icons/luas_bangunan.svg";
import luasTanahIcon from "../icons/luas_tanah.svg";

const PropertyPopup = ({ handleOpenMap, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={ showHideClassName }>
            <section className="modal-main">
                <img className="map-image"
                     src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                     alt="Property Popup Image"/>
                <div className="status-information">
                    <LabelDefault/>
                    <LabelRounded/>
                    <LoveButton/>
                </div>
                <div className="price-information">
                    <b className="real-price">Rp 326 jt</b>&nbsp;Cicilan Rp 2,61jt/bln
                </div>
                <div className="property-address">
                    <b>Rumah minimalis dijual di Bandung Jawa Barat</b>
                    <p>Jl. Sukajadi No.1 Bandung, Jawa Barat</p>
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
                    <button className="property-button" onClick={ handleOpenMap }>Lihat Peta</button>
                </div>
            </section>
        </div>
    );
};

export default PropertyPopup;