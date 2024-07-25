import React from 'react';

import './header1.css';

import CTA from './CTA';
import HeaderSocials from './headerSocials';

import MyPic from '../../assets/me.png';

const Header = () => {
  return (
    <header>
    {/* <div className="container  header__container"> */}
    <div className= "container header__container">
      <h4>Hello I'm</h4>
      <h1>Shashwot Lal Joshi</h1>
      <h4 className="text-light">Developer</h4>

      <CTA/>

      {/* <div className="header__socialsCard"> */}
{/* 
        <div className="bg__me">
          <img src={MyPic} alt="MyPic" />
        </div> */}

        {/* <HeaderSocials/> */}
      {/* </div> */}

      {/* <a href="#contact" className="contact__me">Contact Me</a> */}
    
    <br></br>
    xx Work in progress xx
      


    </div>
  </header>
  )
};

// css-modules approach 

// const Header = () => (
//   // <div className={styles.Header}>
//   //   Header Component
//   // </div>
//   <header>
//     {/* <div className="container  header__container"> */}
//     <div className= {`${rootStyles.container} ${styles.header__container}`}>
//       <h4>Hello I'm</h4>
//       <h1>Shashwot Lal Joshi</h1>
//       <h4 className="text-light">Full Stack Developer</h4>
//       <CTA/>

//       <HeaderSocial/>

//       <div className="bgMe">
//         <img src={MyPic} alt="MyPic" />
//       </div>

//       <a href="#contact" className="scroll__down">Scroll Down</a>
//     </div>
//   </header>
// );

export default Header;