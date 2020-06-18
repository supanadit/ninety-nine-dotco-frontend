import React from "react";
import "./Home.css";

import PropertyPopup from "../components/PropertyPopup";
import PropertyWidget from "../components/PropertyWidget";
import MapPopup from "../components/MapPopup";

import frontendLogo from "../FRONTend.png";
import testLogo from "../TEST.png";

class Home extends React.Component {
    state = { showPropertyPopup: false, showMapPopup: false, };

    showPropertyModal = () => {
        this.setState({ showPropertyPopup: true });
    };

    hidePropertyModal = () => {
        this.setState({ showPropertyPopup: false });
    };

    showMapModal = () => {
        this.hidePropertyModal();
        this.setState({ showMapPopup: true });
    };

    hideMapModal = () => {
        this.setState({ showMapPopup: false });
    };

    render() {
        return <div className="Home">
            <div className="header">
                <img className="left-logo" src={ testLogo } alt="Test Logo"/>
                <img className="right-logo" src={ frontendLogo } alt="Frontend Logo"/>
            </div>
            <div className="content">
                <div className="content-description-box">
                    <span className="content-title">Start Your Journey</span>
                    <div className="content-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                        interdum, ligula non egestas laoreet, quam magna ornare urna, et volutpat magna massa eu nunc.
                        Phasellus scelerisque, odio quis varius mollis, magna massa dictum ex, ac volutpat augue dolor
                        nec sem.
                    </div>
                </div>
                <PropertyWidget showPopupModal={ this.showPropertyModal }/>
            </div>
            <PropertyPopup show={ this.state.showPropertyPopup } handleOpenMap={ this.showMapModal }/>
            <MapPopup show={ this.state.showMapPopup } handleClose={ this.hideMapModal }/>
        </div>;
    }
}

export default Home;