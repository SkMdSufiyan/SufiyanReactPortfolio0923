import React, { useState } from 'react';
import { Navbar, Nav, NavItem, NavbarToggler, Collapse} from "reactstrap";


import matlabLogo from '../logos/matlabLogo.svg';

import { useNavigate } from 'react-router-dom';



const ElectricalProjects = () => {
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
    <div name="Projects" className="element">
          <h4>Electrical Projects</h4>  
          <br />
          <div className='section-content-div'>
            <dl>
                <dt>Demonstration of Power Factor Improvement in Power Systems using Shunt Capacitors <span style={{color:"white", fontWeight: "lighter"}}>(B. Tech)</span>.</dt>
                <br />
                <dd style={{marginLeft : "20px"}}>
                This demo electrical hardware project aims to enhance power efficiency in electrical systems. By strategically integrating shunt capacitors within power networks, this project effectively demonstrates the improvement of the power factor, reducing active and reactive power losses and optimizing energy usage. The project's meticulous design and implementation underscores the significance of power factor correction techniques in modern power systems, offering practical solutions for enhancing overall system performance and energy sustainability.
                    
                    <br />
                    
                    <hr />
                </dd>

                <br />

                <dt>Some Studies on Reactive Power Reserve Optimization in Power Systems using Competitive Swarm Optimizer <span style={{color:"white", fontWeight: "lighter"}}>(M. Tech)</span>.</dt>
                <br />
                <dd style={{marginLeft : "20px"}}>
                This project uses Competitive Swarm Optimizer (CSO) algorithm to enhance reactive power reserve, bolstering power system voltage stability. This research involved optimizing the system's voltage stability under various loading conditions and using different load models. The study compared CSO's performance in maximizing reactive power reserve against other metaheuristic algorithms such as particle swarm optimization and firefly algorithm. Through rigorous analysis and experimentation, this project sheds light on the efficacy of CSO in optimizing power system stability and contributes valuable insights to the field of power system optimization.

                    <br />
                    <br />
                    <br />

                    <div className='tech-stack-div'>
                        <h6>Softwares Used</h6>
                        <div>
                            <img src={matlabLogo} alt='MATLAB' className='small-image-class'/>
                        </div>
                    </div>

                    
                    <hr />
                </dd>

                <br />

                <dt>Application of Particle Swarm Optimization for Solving MultiObjective Optimization Problems in Hybrid Power Systems <span style={{color:"white", fontWeight: "lighter"}}>(mentored for M. Tech)</span>.</dt>
                <br />
                <dd style={{marginLeft : "20px"}}>
                This project uses the particle swarm optimization algorithm to address complex optimization challenges within hybrid power systems. By targeting multiple objectives, such as operating cost minimization, power loss reduction, and voltage stability enhancement, this research explores the efficacy of particle swarm optimization in achieving holistic system optimization. Through rigorous analysis and experimentation, the project aims to provide valuable insights into enhancing the efficiency and performance of hybrid power systems, thereby contributing to advancements in sustainable energy management practices.

                    <br />
                    <br />
                    <div className='tech-stack-div'>
                        <h6>Softwares Used</h6>
                        <div>
                            <img src={matlabLogo} alt='MATLAB' className='small-image-class'/>
                        </div>
                    </div>

                   
                    
                    <hr />
                </dd>

                <br />

                <dt>Optimization of Battery-Supercapacitor Hybrid Energy Storage System in Standalone Wind and Solar-based Generation System using Particle Swarm Optimization <span style={{color:"white", fontWeight: "lighter"}}>(mentored for B. Tech)</span>.</dt>
                <br />
                <dd style={{marginLeft : "20px"}}>
                This project focuses on enhancing the efficiency of standalone wind and solar-based generation systems through optimized utilization of Battery-Supercapacitor Hybrid Energy Storage Systems. By leveraging Particle Swarm Optimization, the project seeks to determine the optimal capacity of the hybrid storage system to address scenarios such as the absence of solar irradiation or insufficient wind speed. This study aims to maximize system reliability and energy utilization through rigorous analysis and simulation, contributing to advancements in sustainable energy integration and management practices.

                <br />
                <br />
                    <div className='tech-stack-div'>
                        <h6>Softwares Used</h6>
                        <div>
                            <img src={matlabLogo} alt='MATLAB' className='small-image-class'/>
                        </div>
                    </div>

                    
                    
                    <hr />
                </dd>

                <br />
            </dl>
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

export default ElectricalProjects;