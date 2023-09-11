import React from 'react';
import { Navbar, Nav, NavItem } from "reactstrap";
import { Link, Element } from 'react-scroll';

const Home = () => {
  return (
    <div className='component-main-div'>
        <Navbar  expand="md" className='Navbar-class' fixed='top'>
          <Nav className="mr-auto" navbar style={{alignItems : "center"}}>
            <NavItem>
              <h6 style={{color:"white"}}>Shaik Mahmmadsufiyan</h6>
            </NavItem>
          </Nav>
          <Nav className='ml-auto' navbar style={{alignItems : "center"}}>
            <NavItem>
            <Link className='home-page-Link-class' to="About Me" spy={true} smooth={true} duration={500}>
              About Me
            </Link>
          </NavItem>
          <NavItem>
            <Link className='home-page-Link-class' to="Skills" spy={true} smooth={true} duration={500}>
              Skills
            </Link>
          </NavItem>
          <NavItem>
            <Link className='home-page-Link-class' to="Projects" spy={true} smooth={true} duration={500}>
              Projects
            </Link>
          </NavItem>
          <NavItem>
            <Link className='home-page-Link-class' to="Experience" spy={true} smooth={true} duration={500}>
              Experience
            </Link>
          </NavItem>
          <NavItem>
            <Link className='home-page-Link-class' to="Achievements" spy={true} smooth={true} duration={500}>
            Achievements
            </Link>
          </NavItem>
          <NavItem>
            <Link className='home-page-Link-class' to="Publications" spy={true} smooth={true} duration={500}>
            Publications
            </Link>
          </NavItem>

          <NavItem>
            <Link className='home-page-Link-class' to="Education" spy={true} smooth={true} duration={500}>
            Education
            </Link>
          </NavItem>
          </Nav>
    </Navbar>

<br />
<br />
<br />

    <div>
        <Element name="About Me" className="element">
          <h5>About Me</h5>
        </Element>
        <Element name="Skills" className="element">
          <h5>Skills</h5>  
        </Element>
        <Element name="Projects" className="element">
          <h5>Projects</h5>  
        </Element>
        <Element name="Experience" className="element">
          <h5>Experience</h5>  
        </Element>
        <Element name="Achievements" className="element">
          <h5>Achievements</h5>  
        </Element>
        <Element name="Publications" className="element">
          <h5>Publications</h5>  
        </Element>
        <Element name="Education" className="element">
          <h5>Education</h5>  
        </Element>
        
      </div>
      
    </div>



  )
}

export default Home;