import React, {useState} from "react";
// import bg from "./img/suicide-squad-typography-hd 2.png"
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCollapse from "./MyCollapse";

export default function FAQ(props) {
    const [firstBoxOpen, setFirstBoxOpen] = useState(false);
    const [secondBoxOpen, setSecondBoxOpen] = useState(false);
    const [thirdBoxOpen, setThirdBoxOpen] = useState(false);
    const [fourthBoxOpen, setFourthBoxOpen] = useState(false);

    return (
      <main>

          <div className="faq-text">
              <p id="one">FAq</p>
              <p id="two">FAq</p>
              <p id="three">FAq</p>
              <p id="four">FAq</p>
              <p id="five">FAq</p>
              <p id="six">FAq</p>
              <div className="ellipseFaq"/>
          </div>

          <div className="content-box">
              <div id="one" className="rectangle20"/>
              <div id="two" className="rectangle20"/>
              <div id="three" className="rectangle20"/>
              <div id="four" className="rectangle20"/>
              <div id="five" className="rectangle20"/>
              <div className="ellipseContent" />


              <div className="content-flex-container">
                  <div className="content contact-us ">
                      <p>CONTACT US</p>
                      <div className="iframe-flex-container">
                          <div className="iframe-box">
                              <iframe
                                  src="https://docs.google.com/forms/d/e/1FAIpQLScNYxPSznZ__pjQcU9Y76JW2xwvhr5adEGlH72lqkldVep4HQ/viewform?embedded=true"
                                  frameBorder="0" marginHeight="0" marginWidth="0" >Loading…
                              </iframe>
                          </div>
                      </div>
                      {/*<div className="rectangle15"/>*/}
                  </div>

                  <div className="content faq-box">
                      {/*<div className="boxes-wrapper">*/}

                          <MyCollapse open={firstBoxOpen} setOpen={setFirstBoxOpen} buttonText="click" collapseText="ඞඞඞඞඞඞඞඞඞඞඞ ඞඞඞඞඞ ඞඞඞඞ ඞඞඞඞඞඞ ඞඞඞඞඞඞ ඞඞඞඞඞ! ඞඞඞඞඞඞඞඞඞඞඞඞඞඞ ඞඞඞඞඞ ඞඞඞඞ ඞඞඞඞඞඞ ඞඞඞඞඞඞ ඞඞඞඞඞ! ඞඞඞ ඞඞඞඞඞඞ ඞඞඞ ඞඞ"/>

                          <MyCollapse open={secondBoxOpen} setOpen={setSecondBoxOpen} buttonText="cli" collapseText="Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                labore wes anderson cred nesciunt sapiente ea proident."/>

                          <MyCollapse open={thirdBoxOpen} setOpen={setThirdBoxOpen} buttonText="cl" collapseText="Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                labore wes anderson cred nesciunt sapiente ea proident."/>

                          <MyCollapse open={fourthBoxOpen} setOpen={setFourthBoxOpen} buttonText="c" collapseText="Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                labore wes anderson cred nesciunt sapiente ea proident."/>

                  </div>
              </div>
          </div>

      </main>
  )
}
