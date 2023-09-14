import React, { useState } from 'react';
import { Navbar, Nav, NavItem, NavbarToggler, Collapse, Button } from "reactstrap";

import { useNavigate } from 'react-router-dom';



const Achievements = () => {
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
    <div name="Achievements" className="element">
          <h4>Achievements</h4>  
          <br />
          <div className='section-content-div'>
            <ul>
                <li>Overall topper of the 15-day codekata challenge (coding competition) conducted by GUVI from 01/01/2023 to 15/01/2023. 
                    <br />
                    <a href="https://drive.google.com/file/d/1w3D6qZNJhyk6WD2Y8uWyXO3L4sHiSl7B/view?usp=drive_link" target='_blank' rel='noopener noreferrer' className='check-link-a-class'><Button color='success' size='sm' style={{margin : "10px"}} className='achievements-button-class'>Certificate</Button></a>

                </li>
                <br />
                <li>Qualified in the GATE exam seven times (AIR 3613). Scorecard links ↓↓
                    <br />
                    <div style={{margin: "10px"}}> 
                    <a href="https://drive.google.com/file/d/1y-9fCMVBOt8IUr4NO_L68RRoriAE4Nfv/view?usp=sharing" target='_blank' rel='noopener noreferrer' className='check-link-a-class'><Button color='primary' size='sm' className='achievements-button-class'>2015</Button></a>
                    <a href="https://drive.google.com/file/d/1IkSKJZ5disz32lt6jPLUXpkVQVrW1wiz/view?usp=sharing" target='_blank' rel='noopener noreferrer' className='check-link-a-class'><Button color='warning' size='sm' className='achievements-button-class'>2016</Button></a>
                    <a href="https://drive.google.com/file/d/16MURkIclyncAvpB_N_WM_Fi1tVN5vIHH/view?usp=sharing" target='_blank' rel='noopener noreferrer' className='check-link-a-class'><Button color='info' size='sm' className='achievements-button-class'>2017</Button></a>
                    <a href="https://drive.google.com/file/d/16oudL_ELjiMaI_vsJEOiOaVIk5Ty0B9s/view?usp=sharing" target='_blank' rel='noopener noreferrer' className='check-link-a-class'><Button color='success' size='sm' className='achievements-button-class'>2018</Button></a>
                    <a href="https://drive.google.com/file/d/1b5XHszmZbWL-wpojgeO--NImlkReQPoA/view?usp=sharing" target='_blank' rel='noopener noreferrer' className='check-link-a-class'><Button color='primary' size='sm' className='achievements-button-class'>2019</Button></a>
                    <a href="https://drive.google.com/file/d/1rRulY1BJHeCtRZsFi9IhIsHi7xfHOJ7u/view?usp=sharing" target='_blank' rel='noopener noreferrer' className='check-link-a-class'><Button color='warning' size='sm' className='achievements-button-class'>2020</Button></a>
                    <a href="https://drive.google.com/file/d/1Lk-AQzTAHSw94yyq586MF_CcDBY0ODOa/view?usp=sharing" target='_blank' rel='noopener noreferrer' className='check-link-a-class'><Button color='success' size='sm' className='achievements-button-class'>2022</Button></a>
                    </div>

                </li>
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

export default Achievements;