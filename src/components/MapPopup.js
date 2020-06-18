import "./MapPopup.css";
import React from "react";

import map from "../images/map.png";
import marker from "../icons/marker.svg";

const MapPopup = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={ showHideClassName }>
            <section className="modal-main">
                <div className="map">
                    <img className="map-image"
                         src={ map }
                         alt="Map Popup Image"/>
                    <img className="map-marker" src={ marker } alt="Marker Map"/>
                </div>
                <div className="property-address">
                    <b>Jl. Sukajadi No.1 Bandung, Jawa Barat</b>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                        interdum, ligula non egestas laoreet, quam magna ornare urna, et volutpat magna massa eu nunc.
                        Phasellus scelerisque, odio quis varius mollis, magna massa dictum ex, ac volutpat augue dolor
                        nec sem.
                    </p>
                </div>
                <div className="property-information">
                    <button className="property-button" onClick={ handleClose }>Tutup</button>
                </div>
            </section>
        </div>
    );
};

export default MapPopup;