import React, {useState} from 'react'
import i2cLogo from "../../images/i2cLogo.png"

const Navbar = (props) => {
  const navItems = props.isNavbar
    ? ["About us", "Registration", "Careers", "Contact us"]
    : ["FAQs", "Privacy Policy", "Other", "Contact us"];
    const [menuVisible, setMenuVisible] = useState(false);
    const toggleMenu = () => {
      setMenuVisible(!menuVisible);
    };
    const { isNavbar } = props; 
    
  return (
    <div class="container">
      <div lang="en" className={isNavbar ? "navbar" : " footerNavbar"}>
          <div>
              <img src={i2cLogo} alt="logo" />
          </div>
          {isNavbar &&  <div className="toggle-button" onClick={toggleMenu}>
          &#9776;
        </div>}
          <div className={`${isNavbar ? "navItems" : "footerItems"}  ${menuVisible ? "visible" : ""}`}>
            { navItems.map((item, index) => {
              return (
                  <a key={index} href="/">{item}</a>
                  )
            })}
            
          </div>
      </div>
      </div>
  )
}

export default Navbar