import React from "react";
import "./PropertyImage.css";

class PropertyImage extends React.Component {
    render() {
        return <div className="PropertyImage">
            <img
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                alt="Property Image"/>
        </div>;
    }
}

export default PropertyImage;