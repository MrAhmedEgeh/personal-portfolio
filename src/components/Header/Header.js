import './Header.css';
import React from 'react';
import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link, NavLink, withRouter} from "react-router-dom";
import {HomeRounded, SchoolRounded, WorkRounded, Facebook, Twitter, LinkedIn, Github, Telegram} from "@material-ui/icons";
import resumeData from '../../utils/resumeData';
import CustomButton from '../Button/Button';
const Header = (props) => {
    const pathName = props?.location?.pathname;
    return(
        <Navbar expand="lg" sticky="top" className="header">
            <Nav.Link as={NavLink} to="/" className="header_navlink">
                <Navbar.Brand className='header_home'>
                    <HomeRounded />
                </Navbar.Brand>
            </Nav.Link>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="header_left">
                    {/*-----RESUME LINK------*/}
                    <Nav.Link xs={1} as={NavLink} to="/" className={pathName === '/' ? 'header_link_active' : 'header_link'}>
                        Resume
                    </Nav.Link>
                    {/*-----Postfolio LINK------*/}
                    <Nav.Link as={NavLink} to="/portfolio" className={pathName === '/portfolio' ? 'header_link_active' : 'header_link'}>
                        Portfolio
                    </Nav.Link>
                </Nav>

                <div className="header_right" xs={12}>
                    {Object.keys(resumeData.social).map(key => (
                        <a href={resumeData.social[key].link} target="_blank">{resumeData.social[key].icon}</a>
                        ))}
                        <a className="mycv" href={resumeData.social.LinkedIn.link} target="_blank"><CustomButton text={'Hire Me'} icon={<Telegram />}/></a>
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default withRouter(Header);
