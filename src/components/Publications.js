import React, { useState } from 'react';
import { Navbar, Nav, NavItem, NavbarToggler, Collapse, Button } from "reactstrap";

import { useNavigate } from 'react-router-dom';



const Publications = () => {
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

  <div name="Publications" className="element">
          <h4>Publications</h4>  
          <br />
          <div className='section-content-div'>

                    <h5 className='journals-conferences-h5'>International Journals</h5>
                    <ul style={{listStyleType : "dot"}}>

                    

                        <li className='publications-li-class'>Shaik, M., Gaonkar, D. N., Nuvvula, R. S., Muyeen, S. M., Shezan, S. A., & Shafiullah, G. M. (2024). Nataf-KernelDensity-Spline-based point estimate method for handling wind power correlation in probabilistic load flow. Expert systems with applications, 245, 123059. (<b style={{color : "greenyellow"}}>Impact Factor 8.5</b>)

                        <a href="https://www.sciencedirect.com/science/article/abs/pii/S0957417423035613?via%3Dihub" target='_blank' rel='noopener noreferrer' className='check-link-a-class'><Button color='success' size='sm' style={{padding : "2px"}} className='publications-button-class'>Check paper</Button></a>
                        </li>


                        <li className='publications-li-class'>Shaik, M., Gaonkar, D. N., Nuvvula, R. S., Kumar, P. P., & Khan, B. (2023). Probabilistic Optimal Active and Reactive Power Dispatch including Load and Wind Uncertainties considering Correlation. International Transactions on Electrical Energy Systems, 2023.  (<b style={{color : "greenyellow"}}>Impact Factor 2.3</b>)

                        <a href="https://www.hindawi.com/journals/itees/2023/2759073/" target='_blank' rel='noopener noreferrer' className='check-link-a-class'><Button color='success' size='sm' style={{padding : "2px"}} className='publications-button-class'>Check paper</Button></a>
                        </li>
                    </ul>
                
                
                    <h5 className='journals-conferences-h5'>International Conferences</h5>
                    <ul style={{listStyleType : "dot"}}>
                        <li className='publications-li-class'>Mahmmadsufiyan, S., & Gaonkar, D. N. (2022, January). Probabilistic Optimal Power Flow In The Presence of Uncertainties Related With Load Wind And PV Considering Different Load Models. In 2022 IEEE International Conference on Power Electronics, Smart Grid, and Renewable Energy (PESGRE) (pp. 1-6). IEEE.

                        <a href="https://ieeexplore.ieee.org/abstract/document/9715906" target='_blank' rel='noopener noreferrer' className='check-link-a-class'><Button color='success' size='sm' style={{padding : "2px"}} className='publications-button-class'>Check paper</Button></a>
                        
                        </li>
                        <br />


                        <li className='publications-li-class'>Mahmmadsufiyan, S., & Gaonkar, D. N. (2021, December). Probabilistic Reactive Power Reserve Assessment In The Presence of Load And Wind Uncertainties Considering Correlation. In 2021 IEEE 2nd International Conference on Smart Technologies for Power, Energy and Control (STPEC) (pp. 1-6). IEEE.

                        <a href="https://ieeexplore.ieee.org/abstract/document/9718647" target='_blank' rel='noopener noreferrer' className='check-link-a-class'><Button color='success' size='sm' style={{padding : "2px"}} className='publications-button-class'>Check paper</Button></a>
                        
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

export default Publications;