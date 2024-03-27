import React, { useState } from 'react';
import { Navbar, Nav, NavItem, NavbarToggler, Collapse, Table, Button } from "reactstrap";

import htmlLogo from '../logos/htmlLogo.svg';
import cssLogo from '../logos/cssLogo.svg';
import javascriptLogo from '../logos/javascriptLogo.svg';
import mongodbLogo from '../logos/mongodbLogo.svg';
import mysqlLogo from '../logos/mysqlLogo.svg';
import reactLogo from '../logos/reactLogo.svg';
import expressjsLogo from '../logos/expressjsLogo.svg';
import nodejsLogo from '../logos/nodejsLogo.svg';
import pythonLogo from '../logos/pythonLogo.svg';
import matlabLogo from '../logos/matlabLogo.svg';

import { useNavigate } from 'react-router-dom';


const Skills = () => {

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
                        <button className='navbar-button-class' onClick={()=>navigate('/electrical-projects')}>Electrical-Projects</button>
                    </NavItem>

                    
                    <NavItem>
                        <button className='navbar-button-class' onClick={()=>navigate('/software-projects')}>Software-Projects</button>
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
    <div name="Skills" className="element">
          <h4 style={{marginLeft : '0px'}}>Skills</h4>  
          <br />
          <div className='section-content-div'>
            <div>
                <img src={javascriptLogo} alt='JavaScript' className='image-class'/>
                <img src={pythonLogo} alt='Python' className='image-class'/>
                <img src={htmlLogo} alt='HTML' className='image-class'/>
                <img src={cssLogo} alt='CSS' className='image-class'/>
                <img src={mysqlLogo} alt='MySQL' className='image-class'/>
                <img src={mongodbLogo} alt='MongoDB' className='image-class'/>
                <img src={expressjsLogo} alt='Express.js' className='image-class'/>
                <img src={reactLogo} alt='React' className='image-class'/>
                <img src={nodejsLogo} alt='Node.js' className='image-class'/>
                <img src={matlabLogo} alt='MATLAB' className='image-class'/>
            </div>
                
                <hr />
            <div>

                <Table responsive style={{width : 'fit-content', backgroundColor : "transparent"}} className='table-transparent'>
                    <tbody style={{backgroundColor : "transparent"}}>
                        <tr>
                            <td style={{backgroundColor : "transparent", color : 'white'}}>JavaScript</td>
                            <td style={{backgroundColor : "transparent", color : 'white'}}><progress value={100} max={100} className='progress-class' /></td>
                            <td style={{backgroundColor : "transparent", color : 'white'}}><a href="https://drive.google.com/file/d/1xu1K9Kbf0w5k9XOMVw9ifFuk31uRmqc8/view?usp=sharing" target='_blank' rel='noopener noreferrer' className='check-link-a-progress-class'><Button color='success' size='sm' className='skills-certificate-button-class'>Certificate</Button></a></td>
                        </tr>
                        <tr>
                            <td style={{backgroundColor : "transparent", color : 'white'}}>Python</td>
                            <td style={{backgroundColor : "transparent", color : 'white'}}><progress value={80} max={100} className='progress-class' /></td>
                            <td style={{backgroundColor : "transparent", color : 'white'}}></td>
                        </tr>
                        <tr>
                            <td style={{backgroundColor : "transparent", color : 'white'}}>HTML</td>
                            <td style={{backgroundColor : "transparent", color : 'white'}}><progress value={90} max={100} className='progress-class' /></td>
                            <td style={{backgroundColor : "transparent", color : 'white'}}><a href="https://drive.google.com/file/d/1GLZGri6RU447ekGdjzpgVkXzEoDtXxAw/view?usp=sharing" target='_blank' rel='noopener noreferrer' className='check-link-a-progress-class'><Button color='success' size='sm' className='skills-certificate-button-class'>Certificate</Button></a></td>
                        </tr>
                        <tr>
                            <td style={{backgroundColor : "transparent", color : 'white'}}>CSS</td>
                            <td style={{backgroundColor : "transparent", color : 'white'}}><progress value={70} max={100} className='progress-class' /></td>
                            <td style={{backgroundColor : "transparent", color : 'white'}}><a href="https://drive.google.com/file/d/1g4IhSkoSrQlSqoFUfgoXmIH90prA-e8r/view?usp=sharing" target='_blank' rel='noopener noreferrer' className='check-link-a-progress-class'><Button color='success' size='sm' className='skills-certificate-button-class'>Certificate</Button></a></td>
                        </tr>
                        <tr>
                            <td style={{backgroundColor : "transparent", color : 'white'}}>MySQL</td>
                            <td style={{backgroundColor : "transparent", color : 'white'}}><progress value={80} max={100} className='progress-class' /></td>
                            <td style={{backgroundColor : "transparent", color : 'white'}}><a href="https://drive.google.com/file/d/13nBBzgZSGzS1fq2H-QXfPB9rhzF1mluz/view?usp=sharing" target='_blank' rel='noopener noreferrer' className='check-link-a-progress-class'><Button color='success' size='sm' className='skills-certificate-button-class'>Certificate</Button></a></td>
                        </tr>
                        <tr>
                            <td style={{backgroundColor : "transparent", color : 'white'}}>MongoDB</td>
                            <td style={{backgroundColor : "transparent", color : 'white'}}><progress value={90} max={100} className='progress-class' /></td>
                            <td style={{backgroundColor : "transparent", color : 'white'}}><a href="https://drive.google.com/file/d/1AtRUbL6WmCidjlQQUxkrZ13MpNDijBiZ/view?usp=sharing" target='_blank' rel='noopener noreferrer' className='check-link-a-progress-class'><Button color='success' size='sm' className='skills-certificate-button-class'>Certificate</Button></a></td>
                        </tr>
                        <tr>
                            <td style={{backgroundColor : "transparent", color : 'white'}}>Node.js</td>
                            <td style={{backgroundColor : "transparent", color : 'white'}}><progress value={90} max={100} className='progress-class' /></td>
                            <td style={{backgroundColor : "transparent", color : 'white'}}><a href="https://drive.google.com/file/d/17SQolaVVp57nTrHrB0cAmp1o3LpKynjx/view?usp=sharing" target='_blank' rel='noopener noreferrer' className='check-link-a-progress-class'><Button color='success' size='sm' className='skills-certificate-button-class'>Certificate</Button></a></td>
                        </tr>
                        <tr>
                            <td style={{backgroundColor : "transparent", color : 'white'}}>React</td>
                            <td style={{backgroundColor : "transparent", color : 'white'}}><progress value={90} max={100} className='progress-class' /></td>
                            <td style={{backgroundColor : "transparent", color : 'white'}}><a href="https://drive.google.com/file/d/1XsLJi0FPEk099eIa3h_oI0cvzOSLolXh/view?usp=sharing" target='_blank' rel='noopener noreferrer' className='check-link-a-progress-class'><Button color='success' size='sm' className='skills-certificate-button-class'>Certificate</Button></a></td>
                        </tr>
                        <tr>
                            <td style={{backgroundColor : "transparent", color : 'white'}}>Bootstrap</td>
                            <td style={{backgroundColor : "transparent", color : 'white'}}><progress value={60} max={100} className='progress-class' /></td>
                            <td style={{backgroundColor : "transparent", color : 'white'}}><a href="https://drive.google.com/file/d/131gTJr6oY16OXY-Qs6NUUs3Um0FmILIA/view?usp=sharing" target='_blank' rel='noopener noreferrer' className='check-link-a-progress-class'><Button color='success' size='sm' className='skills-certificate-button-class'>Certificate</Button></a></td>
                        </tr>
                        <tr>
                            <td style={{backgroundColor : "transparent", color : 'white'}}>MATLAB</td>
                            <td style={{backgroundColor : "transparent", color : 'white'}}><progress value={100} max={100} className='progress-class' /></td>
                            <td style={{backgroundColor : "transparent", color : 'white'}}></td>
                        </tr>
                    </tbody>
                </Table>
               
                <div>
                <a href="https://drive.google.com/file/d/1mX93rvBBuc8QJUWm7DRFOLvCSPj6jE6u/view?usp=sharing" target='_blank' rel='noopener noreferrer' className='check-link-a-progress-class'><Button color='success' size='sm' className='skills-certificate-button-class'>FSD Certificate</Button></a>
                </div>
                
            </div>
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

export default Skills;