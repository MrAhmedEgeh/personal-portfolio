import './Footer.css';
import React from 'react';
import {Typography} from '@material-ui/core';
import resumeData from '../../utils/resumeData';
const Footer = () => {
    return(
        <div className="footer">
            <div className="footer_left">
                <Typography className="footer_name">{resumeData.name}</Typography>
            </div>
            <div className="footer_right">
            <Typography className="footer_copyright">&copy; 2021. Developed by Ahmed Egeh</Typography>
            </div>
        </div>
    );
}

export default Footer;
