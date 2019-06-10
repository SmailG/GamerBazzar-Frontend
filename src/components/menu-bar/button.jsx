import React from 'react';
import { Button } from 'semantic-ui-react';
import _ from 'lodash';
import './styles.scss';

const ControlButton = ({ clickHandler, text, icon, color, customClass }) => {

    let btnBgColor = getColor(color, 'bg') ? getColor(color, 'bg') : 'primary';
    let btnBorderColor = getColor(color, 'border') ? getColor(color, 'border') : 'primary';

    return (
        <Button className={customClass} style={{background: btnBgColor, borderColor: btnBorderColor}}>
            {text}
        </Button>
    );
}

const getColor = (color, prop) => {
    if(prop === 'bg')
    switch (color) {
        case 'primary':
            return 'linear-gradient(#3949AB, #4FC3F7)';
        case 'secondary':
            return '#111E2A';
        default:
            return color;
    }
    else if(prop === 'border')
    switch (color) {
        case 'primary':
            return '#707070';
        case 'secondary':
            return '#4488D2';
        default:
            return color;
    }
} 

export default ControlButton;