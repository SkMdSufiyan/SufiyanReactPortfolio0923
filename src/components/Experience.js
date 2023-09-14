import React, { useState } from 'react';
import { Navbar, Nav, NavItem, NavbarToggler, Collapse } from "reactstrap";

import { useNavigate } from 'react-router-dom';



const Experience = () => {
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
                <Nav className='ml-auto' navbar style={{ textAlign : "right", marginLeft : "auto"}}>
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
    <br />

    <div className='portfolio-body-div'>
    <div name="Experience" className="element">
          <h4>Experience</h4>  
          <br />
          <div className='section-content-div'>
            <ul>
                <li>Experience with the application of Optimization algorithms and Probabilistic methods for solving engineering problems.</li>
                <br />
                <li>Teaching experience of 4 months (Jul-2017 to Oct-2017).</li>
            </ul>
            <hr />
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

export default Experience;
