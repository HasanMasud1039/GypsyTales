import React from 'react';
import AboutDestination from './DestinationDetails/AboutDestination';
import Map_Weather from './DestinationDetails/Map_Weather';
import PopularTours from './DestinationDetails/PopularTours';
import Activities from './DestinationDetails/Activities';

const DestinationDetails = () => {
    return (
        <div>
            <Map_Weather />
            <AboutDestination />
        </div>
    );
};

export default DestinationDetails;