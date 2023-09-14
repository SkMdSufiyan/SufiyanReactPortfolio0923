import React, { useState } from 'react';
import { Navbar, Nav, NavItem, NavbarToggler, Collapse } from "reactstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';



const Home = () => {

  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
      setIsOpen(!isOpen);
  };


  return (
    <div className='component-main-div'>
        <Navbar  expand="md" className='Navbar-class' fixed='top' style={{whiteSpace : 'nowrap'}}>
          <div style={{textAlign : 'left', marginRight : 'auto', width : 'fit-content'}}>
            <Nav className="mr-auto" navbar style={{textAlign : "left"}}>
                <NavItem>
                <span className='navbar-name'>Sk. Md. Sufiyan</span>
                </NavItem>
            </Nav>
          </div>


          <NavbarToggler onClick={toggleNavbar} />
            <Collapse isOpen={isOpen} navbar style={{textAlign : 'right', marginLeft : 'auto', width : 'fit-content'}}>
                <Nav className='ml-auto' navbar style={{textAlign : "right", marginLeft : "auto"}}>
                    <NavItem>
                        <button className='navbar-button-class' onClick={() => navigate('/')}>Home</button>
                    </NavItem>
                    <NavItem>
                        <button className='navbar-button-class' onClick={()=>navigate('/about-me')}>About Me</button>
                    </NavItem>
                    <NavItem>
                        <button className='navbar-button-class' onClick={()=>navigate('/skills')}>Skills</button>
                    </NavItem>
                    <NavItem>
                        <button className='navbar-button-class' onClick={()=>navigate('/projects')}>Projects</button>
                    </NavItem>
                    <NavItem>
                        <button className='navbar-button-class' onClick={()=>navigate('/experience')}>Experience</button>
                    </NavItem>
                    <NavItem>
                        <button className='navbar-button-class' onClick={()=>navigate('/achievements')}>Achievements</button>
                    </NavItem>
                    <NavItem>
                        <button className='navbar-button-class' onClick={()=>navigate('/publications')}>Publications</button>
                    </NavItem>
                    <NavItem>
                        <button className='navbar-button-class' onClick={()=>navigate('/education')}>Education</button>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>

<br />
<br />
<br />
<br />

    <div className='portfolio-body-div'>
        <div className='name-div'>
            <h4>Hey there!, I'm-</h4>
            <h1>Shaik Mahmmadsufiyan</h1>
            <h3>Research Scholar (Electrical Engineering, NITK),</h3>
            <h3>Full-Stack Developer.</h3>
            <br />
            <div>
                <span style={{marginRight : "20px"}}><a href="mailto:mdsufiyan9205@gmail.com" target='_blank' rel='noopener noreferrer' className='home-check-link-a-class' style={{textDecoration : "none"}}><FontAwesomeIcon icon={faEnvelope} /> mdsufiyan9205@gmail.com</a></span>

                <span style={{marginLeft : "20px", marginRight : "20px"}}><a href="tel:+918008518446" target='_blank' rel='noopener noreferrer' className='home-check-link-a-class' style={{textDecoration : "none"}}><FontAwesomeIcon icon={faPhone} /> +91 8008518446</a></span>

                <span style={{marginLeft : "20px"}}><a href="https://drive.google.com/file/d/1OWSnHYhupwlZl7r-8rrsTkRQwPU4qh4m/view?usp=sharing" target='_blank' rel='noopener noreferrer' className='home-check-link-a-class' style={{textDecoration : "none"}}> <FontAwesomeIcon icon={faFileAlt} /> My Resume</a></span>
            </div>

        </div>   

      </div>

      <br />
      <br />
      <br />
      <br />
      
    </div>



  )
}

export default Home;