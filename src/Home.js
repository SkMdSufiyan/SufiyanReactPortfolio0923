import React, { useState } from 'react';
import { Navbar, Nav, NavItem, NavbarToggler, Collapse, Table, Button } from "reactstrap";
import { Link, Element } from 'react-scroll';
import htmlLogo from './logos/htmlLogo.svg';
import cssLogo from './logos/cssLogo.svg';
import javascriptLogo from './logos/javascriptLogo.svg';
import mongodbLogo from './logos/mongodbLogo.svg';
import mysqlLogo from './logos/mysqlLogo.svg';
import reactLogo from './logos/reactLogo.svg';
import expressjsLogo from './logos/expressjsLogo.svg';
import nodejsLogo from './logos/nodejsLogo.svg';
import pythonLogo from './logos/pythonLogo.svg';
import matlabLogo from './logos/matlabLogo.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faCalendar, faFileAlt } from '@fortawesome/free-solid-svg-icons';


const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };


  return (
    <div className='component-main-div'>
        <Navbar  expand="md" className='Navbar-class' fixed='top'>
          <Nav className="mr-auto" navbar style={{alignItems : "center"}}>
            <NavItem>
              <h6 style={{color:"white"}}>Shaik Mahmmadsufiyan</h6>
            </NavItem>
          </Nav>

          <NavbarToggler onClick={toggleNavbar} />
            <Collapse isOpen={isOpen} navbar>


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

          </Collapse>
    </Navbar>

<br />
<br />
<br />

    <div className='portfolio-body-div'>
        <div className='name-div'>
            <h4>Hey there!, I'm-</h4>
            <h1>Shaik Mahmmadsufiyan</h1>
            <h3>Fullstack Developer</h3>
            <div>
                <span style={{marginRight : "20px"}}><a href="mailto:mdsufiyan9205@gmail.com" target='_blank' rel='noopener noreferrer' className='check-link-a-class' style={{textDecoration : "none"}}><FontAwesomeIcon icon={faEnvelope} /> mdsufiyan9205@gmail.com</a></span>

                <span style={{marginLeft : "20px", marginRight : "20px"}}><a href="tel:+918008518446" target='_blank' rel='noopener noreferrer' className='check-link-a-class' style={{textDecoration : "none"}}><FontAwesomeIcon icon={faPhone} /> +91 8008518446</a></span>

                <span style={{marginLeft : "20px"}}><a href="https://drive.google.com/file/d/1OWSnHYhupwlZl7r-8rrsTkRQwPU4qh4m/view?usp=sharing" target='_blank' rel='noopener noreferrer' className='check-link-a-class' style={{textDecoration : "none"}}> <FontAwesomeIcon icon={faFileAlt} /> My Resume</a></span>
            </div>

        </div>

        <br />
        <br />
        <br />
        <Element name="About Me" className="element">
          <h4>About Me</h4>
          <div className='section-content-div'>
                I am a Ph.D. candidate in Electrical Engineeringwith a strong passion for technology and software development. Alongside my academic journey, I’ve developed expertise as a Full-Stack Developer, proficient in [MERN FSD]. My interdisciplinary background enables me to tackle complex challenges and drive innovation in engineering and software domains. Passionate, adaptable, and eager to contribute to impactful projects.
                <hr />
          </div>
        </Element>
        

        <br />

        <Element name="Skills" className="element">
          <h4>Skills</h4>  
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

                <Table responsive style={{width : 'fit-content'}}>
                    <tbody>
                        <tr>
                            <td>JavaScript</td>
                            <td><progress value={100} max={100} className='progress-class' /></td>
                            <td><a href="https://drive.google.com/file/d/1xu1K9Kbf0w5k9XOMVw9ifFuk31uRmqc8/view?usp=sharing" target='_blank' rel='noopener noreferrer' className='check-link-a-progress-class'><Button color='primary' size='sm'>Certificate</Button></a></td>
                        </tr>
                        <tr>
                            <td>Python</td>
                            <td><progress value={80} max={100} className='progress-class' /></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>HTML</td>
                            <td><progress value={90} max={100} className='progress-class' /></td>
                            <td><a href="https://drive.google.com/file/d/1GLZGri6RU447ekGdjzpgVkXzEoDtXxAw/view?usp=sharing" target='_blank' rel='noopener noreferrer' className='check-link-a-progress-class'><Button color='primary' size='sm'>Certificate</Button></a></td>
                        </tr>
                        <tr>
                            <td>CSS</td>
                            <td><progress value={70} max={100} className='progress-class' /></td>
                            <td><a href="https://drive.google.com/file/d/1g4IhSkoSrQlSqoFUfgoXmIH90prA-e8r/view?usp=sharing" target='_blank' rel='noopener noreferrer' className='check-link-a-progress-class'><Button color='primary' size='sm'>Certificate</Button></a></td>
                        </tr>
                        <tr>
                            <td>MySQL</td>
                            <td><progress value={80} max={100} className='progress-class' /></td>
                            <td><a href="https://drive.google.com/file/d/13nBBzgZSGzS1fq2H-QXfPB9rhzF1mluz/view?usp=sharing" target='_blank' rel='noopener noreferrer' className='check-link-a-progress-class'><Button color='primary' size='sm'>Certificate</Button></a></td>
                        </tr>
                        <tr>
                            <td>MongoDB</td>
                            <td><progress value={90} max={100} className='progress-class' /></td>
                            <td><a href="https://drive.google.com/file/d/1AtRUbL6WmCidjlQQUxkrZ13MpNDijBiZ/view?usp=sharing" target='_blank' rel='noopener noreferrer' className='check-link-a-progress-class'><Button color='primary' size='sm'>Certificate</Button></a></td>
                        </tr>
                        <tr>
                            <td>Node.js</td>
                            <td><progress value={90} max={100} className='progress-class' /></td>
                            <td><a href="https://drive.google.com/file/d/17SQolaVVp57nTrHrB0cAmp1o3LpKynjx/view?usp=sharing" target='_blank' rel='noopener noreferrer' className='check-link-a-progress-class'><Button color='primary' size='sm'>Certificate</Button></a></td>
                        </tr>
                        <tr>
                            <td>React</td>
                            <td><progress value={90} max={100} className='progress-class' /></td>
                            <td><a href="https://drive.google.com/file/d/1XsLJi0FPEk099eIa3h_oI0cvzOSLolXh/view?usp=sharing" target='_blank' rel='noopener noreferrer' className='check-link-a-progress-class'><Button color='primary' size='sm'>Certificate</Button></a></td>
                        </tr>
                        <tr>
                            <td>Bootstrap</td>
                            <td><progress value={60} max={100} className='progress-class' /></td>
                            <td><a href="https://drive.google.com/file/d/131gTJr6oY16OXY-Qs6NUUs3Um0FmILIA/view?usp=sharing" target='_blank' rel='noopener noreferrer' className='check-link-a-progress-class'><Button color='primary' size='sm'>Certificate</Button></a></td>
                        </tr>
                        <tr>
                            <td>MATLAB</td>
                            <td><progress value={100} max={100} className='progress-class' /></td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
               
                <div>
                <a href="https://drive.google.com/file/d/1mX93rvBBuc8QJUWm7DRFOLvCSPj6jE6u/view?usp=sharing" target='_blank' rel='noopener noreferrer' className='check-link-a-progress-class'><Button color='primary' size='sm'>FSD Certificate</Button></a>
                </div>
                
            </div>
            <hr />
          </div>
        </Element>

        <br />

        <Element name="Projects" className="element">
          <h4>Projects</h4>  
          <div className='section-content-div'>
            <dl>
                <dt>Customer Relationship Management (CRM) Application <a href="https://sufiyan-cv-crm-application-fsd.netlify.app" target='_blank' rel='noopener noreferrer' className='check-link-a-class'><Button color='primary' size='sm'>Take a look</Button></a></dt>
                <br />
                <dd style={{marginLeft : "20px"}}>
                    <p>This MERN fullstack web application provides different levels of access to the different categories of users, such as, Admin, Manager, Employee with rights, Employee without rights. This application possess complete authentication and authorization. Activates the registered user by emailing an account actvation link. Resets the password by emailing a password reset link to the activated user.</p> 

                    <p>An admin is authorized to perform CRUD operations on users, leads, and service requests. A manager is authorized to perform create and read operations on users, and CRUD operations on leads and service requests. An employee with rights is authorized to perform CRUD operations on leads and service requests. An employee is can just read the leads and service requests data.</p>

                    <p>Whenever a new lead or a new service request is created, then this application triggers an email to the admins and managers.</p>

                    <br />
                    <div className='tech-stack-div'>
                        <h6>Tech Stack</h6>
                        <div>
                            <img src={mongodbLogo} alt='MongoDB' className='small-image-class'/>
                            <img src={expressjsLogo} alt='Express.js' className='small-image-class'/>
                            <img src={reactLogo} alt='React' className='small-image-class'/>
                            <img src={nodejsLogo} alt='Node.js' className='small-image-class'/>
                            <img src={javascriptLogo} alt='JavaScript' className='small-image-class'/>
                            <img src={cssLogo} alt='CSS' className='small-image-class'/>
                        </div>
                    </div>

                    <br />
                    <div><a href="https://github.com/SkMdSufiyan/SufiyanCvCrmAppFullstack.git" target='_blank' rel='noopener noreferrer' ><Button color='success'>Source code</Button></a></div>
                    <hr />
                </dd>

                <br />

                <dt>Zen Student Dashboard Application <a href="https://sufiyan-cv-zen-dashboard-app-fsd.netlify.app" target='_blank' rel='noopener noreferrer' className='check-link-a-class'><Button color='warning' size='sm'>Take a look</Button></a></dt>
                <br />
                <dd style={{marginLeft : "20px"}}>
                    <p>This MERN fullstack web application is a demo application of the zen class student dashboard. In this application, a student can register, attend the classes, watch the recordings of the attended classes. The student can submit the source code links of the daily tasks, webcodes, capstone, and portfolio etc. This application possess complete authentication. Activates the registered student by emailing an account actvation link. Resets the password by emailing a password reset link to the activated student.</p> 

                    <br />
                    <div className='tech-stack-div'>
                        <h6>Tech Stack</h6>
                        <div>
                            <img src={mongodbLogo} alt='MongoDB' className='small-image-class'/>
                            <img src={expressjsLogo} alt='Express.js' className='small-image-class'/>
                            <img src={reactLogo} alt='React' className='small-image-class'/>
                            <img src={nodejsLogo} alt='Node.js' className='small-image-class'/>
                            <img src={javascriptLogo} alt='JavaScript' className='small-image-class'/>
                            <img src={cssLogo} alt='CSS' className='small-image-class'/>
                        </div>
                    </div>
                    <br />
                    
                    <div><a href="https://github.com/SkMdSufiyan/SufiyanCvZenDashboardAppFullstack.git" target='_blank' rel='noopener noreferrer'><Button color='success'>Source code</Button></a></div>

                    <hr />
                </dd>
            
            </dl>
          </div>
        </Element>

        <br />

        <Element name="Experience" className="element">
          <h4>Experience</h4>  
          <div className='section-content-div'>
            <ul>
                <li>Experience with the application of Optimization algorithms and Probabilistic methods for solving engineering problems.</li>
                <br />
                <li>Teaching experience of 4 months (Jul-2017 to Oct-2017).</li>
            </ul>
            <hr />
          </div>
        </Element>

        <br />
        <Element name="Achievements" className="element">
          <h4>Achievements</h4>  
          <div className='section-content-div'>
            <ul>
                <li>Overall topper of the 15-day codekata challenge (coding competition) conducted by GUVI from 01/01/2023 to 15/01/2023. 
                    <br />
                    <a href="https://drive.google.com/file/d/1w3D6qZNJhyk6WD2Y8uWyXO3L4sHiSl7B/view?usp=drive_link" target='_blank' rel='noopener noreferrer' className='check-link-a-class'><Button color='success' size='sm' style={{margin : "10px"}}>Certificate</Button></a>

                </li>
                <br />
                <li>Qualified in the GATE exam seven times (AIR 3613). Scorecard links ↓↓
                    <br />
                    <div style={{margin: "10px"}}> 
                    <a href="https://drive.google.com/file/d/1y-9fCMVBOt8IUr4NO_L68RRoriAE4Nfv/view?usp=sharing" target='_blank' rel='noopener noreferrer' className='check-link-a-class'><Button color='primary' size='sm'>2015</Button></a>
                    <a href="https://drive.google.com/file/d/1IkSKJZ5disz32lt6jPLUXpkVQVrW1wiz/view?usp=sharing" target='_blank' rel='noopener noreferrer' className='check-link-a-class'><Button color='warning' size='sm'>2016</Button></a>
                    <a href="https://drive.google.com/file/d/16MURkIclyncAvpB_N_WM_Fi1tVN5vIHH/view?usp=sharing" target='_blank' rel='noopener noreferrer' className='check-link-a-class'><Button color='info' size='sm'>2017</Button></a>
                    <a href="https://drive.google.com/file/d/16oudL_ELjiMaI_vsJEOiOaVIk5Ty0B9s/view?usp=sharing" target='_blank' rel='noopener noreferrer' className='check-link-a-class'><Button color='success' size='sm'>2018</Button></a>
                    <a href="https://drive.google.com/file/d/1b5XHszmZbWL-wpojgeO--NImlkReQPoA/view?usp=sharing" target='_blank' rel='noopener noreferrer' className='check-link-a-class'><Button color='primary' size='sm'>2019</Button></a>
                    <a href="https://drive.google.com/file/d/1rRulY1BJHeCtRZsFi9IhIsHi7xfHOJ7u/view?usp=sharing" target='_blank' rel='noopener noreferrer' className='check-link-a-class'><Button color='warning' size='sm'>2020</Button></a>
                    <a href="https://drive.google.com/file/d/1Lk-AQzTAHSw94yyq586MF_CcDBY0ODOa/view?usp=sharing" target='_blank' rel='noopener noreferrer' className='check-link-a-class'><Button color='success' size='sm'>2022</Button></a>
                    </div>

                </li>
            </ul>

            <hr />
          </div>
        </Element>

        <br />
        <Element name="Publications" className="element">
          <h4>Publications</h4>  
          <div className='section-content-div'>

                    <h6>International Journals</h6>
                    <ul style={{listStyleType : "dot"}}>
                        <li className='publications-li-class'>Shaik, M., Gaonkar, D.N., Nuvvula, R.S., Kumar, P.P. and Khan, B., 2023. Probabilistic Optimal Active and Reactive Power Dispatch including Load and Wind Uncertainties considering Correlation. International Transactions on Electrical Energy Systems, 2023.

                        <a href="https://www.hindawi.com/journals/itees/2023/2759073/" target='_blank' rel='noopener noreferrer' className='check-link-a-class'><Button color='success' size='sm' style={{padding : "2px"}}>Check paper</Button></a>
                        </li>
                    </ul>
                
                
                    <h6>International Conferences</h6>
                    <ul style={{listStyleType : "dot"}}>
                        <li className='publications-li-class'>Mahmmadsufiyan, S. and Gaonkar, D.N., 2022, January. Probabilistic Optimal Power Flow In The Presence of Uncertainties Related With Load Wind And PV Considering Different Load Models. In 2022 IEEE International Conference on Power Electronics, Smart Grid, and Renewable Energy (PESGRE) (pp. 1-6). IEEE.

                        <a href="https://ieeexplore.ieee.org/abstract/document/9715906" target='_blank' rel='noopener noreferrer' className='check-link-a-class'><Button color='success' size='sm' style={{padding : "2px"}}>Check paper</Button></a>
                        
                        </li>
                        <br />


                        <li className='publications-li-class'>Mahmmadsufiyan, S. and Gaonkar, D.N., 2021, December. Probabilistic Reactive Power Reserve Assessment In The Presence of Load And Wind Uncertainties Considering Correlation. In 2021 IEEE 2nd International Conference on Smart Technologies for Power, Energy and Control (STPEC) (pp. 1-6). IEEE.

                        <a href="https://ieeexplore.ieee.org/abstract/document/9718647" target='_blank' rel='noopener noreferrer' className='check-link-a-class'><Button color='success' size='sm' style={{padding : "2px"}}>Check paper</Button></a>
                        
                        </li>

                    </ul>
                    
                    <hr />
          </div>
        </Element>



        <br />
        <Element name="Education" className="element">
          <h4>Education</h4>  
          <div className='section-content-div'>
            <h5>Ph.D. (Power Systems) - <span style={{color : "blue"}}>8.71 CGPA</span></h5>
            <h6>National Institute of Technology Karnataka, Surathkal</h6>
            <p><FontAwesomeIcon icon={faCalendar} /><span style={{margin : "5px 10px"}}>July 2018 - Currently</span></p>

            <br />
            <h5>M.Tech. (Power and Energy Systems Engineering) - <span style={{color : "blue"}}>9.14 CGPA</span></h5>
            <h6>National Institute of Technology, Silchar</h6>
            <p><FontAwesomeIcon icon={faCalendar} /><span style={{margin : "5px 10px"}}>2017</span></p>

            <br />
            <h5>B.Tech. (Electrical and Electronics Engineering) - <span style={{color : "blue"}}>72%</span></h5>
            <h6>Krishna University, Machilipatnam, A. P.</h6>
            <p><FontAwesomeIcon icon={faCalendar} /><span style={{margin : "5px 10px"}}>2014</span></p>

            <br />
            <h5>Higher Secondary - <span style={{color : "blue"}}>87%</span></h5>
            <h6>Board of Intermediate Education, A. P.</h6>
            <p><FontAwesomeIcon icon={faCalendar} /><span style={{margin : "5px 10px"}}>2010</span></p>

            <br />
            <h5>Secondary - <span style={{color : "blue"}}>87%</span></h5>
            <h6>Board of Secondary Education, A. P.</h6>
            <p><FontAwesomeIcon icon={faCalendar} /><span style={{margin : "5px 10px"}}>2007</span></p>



          </div>
        </Element>
        
      </div>

      <br />
      <br />
      <br />
      <br />
      
    </div>



  )
}

export default Home;