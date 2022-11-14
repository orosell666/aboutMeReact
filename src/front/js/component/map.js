import React from "react";
import GoogleMapReact from 'google-map-react';
import { Marker } from "./marker";

export const SimpleMap = () => {
    const defaultProps = {
        center: {
            lat: 49.734267,
            lng: 6.135385
        },
        zoom: 4
    };

    return (
        // Important! Always set the container height explicitly
        <div className="img-fluid  container-fluid justify-content-center mb-5" style={{ height: '400px', width: '100vh' }
        }>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <Marker
                    lat={47.179988}
                    lng={11.794677}
                    text="Mayrhofen"

                />
                <Marker
                    lat={42.727060}
                    lng={0.951796}
                    text="Mayrhofen"

                />
            </GoogleMapReact>
        </div >
    );
}