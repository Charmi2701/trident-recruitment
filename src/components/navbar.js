import Navbar from "react-bootstrap/Navbar";
import React, { Component } from "react";
//import { navigate } from "@reach/router";
//import { Auth } from "aws-amplify";
import logo from '../assets/logo512.jpg'
//import LogoText from "./helpers/LogoText";
import {Nav} from "react-bootstrap";
//import signOut from "../utils/signOut";
import '../styles/header.css'
import {NavLink, Link} from 'react-router-dom'
import {connect} from 'react-redux'
//import {signOut} from '../actions/auth_actions'

const ESNavbar = (props) => {
    return (
      <Navbar
        
        className={"navContainer"}
        expand={"lg"}
        collapseOnSelect={true}
      >
        <Navbar.Brand>
        <Link to='/' className="navbar-title">
            <div
                className="logoContainer"
                style={{ cursor: "pointer" }}
            >
                <img
                alt={"tridentlabs"}
                src={logo}
                width={90}
                height={70}
                className={"navImage"}
                style={{borderRadius:0}}
                />
                &nbsp;
                <span style={{fontWeight:"bold", fontSize:40, color:'#181838', textDecoration:'none'}}>TRIDENT LABS</span>
            </div>
            </Link> 
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={"justify-content-end"}
        >
          <Nav>

            {/* <Nav.Link onClick={() => <NavLink to='/addquestions'/>} eventKey={"1"}>
              Add Questions
            </Nav.Link> */}
            <li>
                <Nav.Link>
                <NavLink to='/' className='nav-bar-items'>Display Status</NavLink>
                </Nav.Link>
            </li>
            <li>
                <Nav.Link>
                <NavLink to='/addData' className='nav-bar-items'>Add Applicant Data</NavLink>
                </Nav.Link>
            </li>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default ESNavbar;