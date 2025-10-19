import Styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <footer className={Styles.footer}>
        <div className={Styles.footer1}>
          <div className={Styles.footercontent1}>
            <h5 style={{ fontWeight: "bolder", fontSize: "20px" }}>
              BE THE FIRST TO KNOW
            </h5>
            <p className={Styles.signupinfo}>
              Sign up for updates from metta muse
            </p>
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              <div className={Styles.footerinputdiv}>
                <input
                  type="text"
                  className={Styles.footerinput}
                  placeholder="Enter your e-mail...."
                />
              </div>
              <div className={Styles.subscribebtndiv}>
                <button className={Styles.subscribebtn}>SUBSCRIBE</button>
              </div>
            </div>
          </div>
          <hr className={Styles.line}/>

          <div className={Styles.footercontent2}>
            <h5 style={{ fontWeight: "bolder", fontSize: "20px" }}>
              CONTACT US
            </h5>
            <div className={Styles.callus}>
              <p>+44 221 133 5360</p>
              <p>customercare@mettamuse.com</p>
            </div>
          <hr className={Styles.line}/>

            <h5
              style={{
                marginTop: "20px",
                fontWeight: "bolder",
                fontSize: "20px",
              }}
            >
              CURRENCY
            </h5>
            <div style={{ marginTop: "10px" }}>+ USD</div>
            <p className={Styles.transactionInfo}>
              Transaction will be completed in Euros and a currency reference is
              available on hover.
            </p>
          <hr className={Styles.line}/>
          </div>

        </div>

        <hr  className={Styles.desktopline}/>


        <div className={Styles.mobileFooter}>
          <select>
            <option>metta muse</option>
            <option>About Us</option>
            <option>Stories</option>
            <option>Artisans</option>
            <option>Boutiques</option>
            <option>Contact Us</option>
            <option>EU Compliances Docs</option>
          </select>
          <hr className={Styles.line}/>


          <select>
            <option>QUICK LINKS</option>
            <option>Orders & Shipping</option>
            <option>Join/Login as a Seller</option>
            <option>Payment & Pricing</option>
            <option>Return & Refunds</option>
            <option>FAQs</option>
            <option>Privacy Policy</option>
            <option>Terms & Conditions</option>
          </select>
          <hr className={Styles.line}/>


          <select>
            <option>FOLLOW US</option>
            <option>Linked In</option>
            <option>Instagram</option>
          </select>
          <hr className={Styles.line}/>

        </div>

        <div className={Styles.footercontent3}>
          <div style={{ width: "25%" }}>
            <h5>metta muse</h5>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>

          <div style={{ width: "25%" }}>
            <h5>QUICK LINKS</h5>
            <ul>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div style={{ width: "50%", position: "relative", left: "40px" }}>
            <div>
              <h5>FOLLOW US</h5>
              <div style={{ marginTop: "20px", gap: "10px" }}>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-linkedin"></i>
              </div>
            </div>

            <div style={{ marginTop: "30px" }}>
              <h5>metta muse ACCEPTS</h5>
              <div className={Styles.accptedpayments}>
                {/* <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" /> */}
              </div>
            </div>
          </div>
        </div>

        <div className={Styles.copyright}>
          Copyright © 2023 mettamuse. All rights reserved.
        </div>
      </footer>
    </>
  );
}
export default Footer;
