import React from "react";
import "./Footer.css";
import InstagramIcon from "@material-ui/icons/Instagram";

function Footer() {
  return (
    <div>
      <footer>
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
          alt="tmdb"
        />
        <p>Copyright &copy; Apoorv Rastogi All Rights Reserved.</p>
        <p className="contact_me">
          Connect with me @{" "}
          <a href="https://www.linkedin.com/in/apoorvr98/" target="_blank">
            <img
              className="contact_icons"
              src="https://camo.githubusercontent.com/c8a9c5b414cd812ad6a97a46c29af67239ddaeae08c41724ff7d945fb4c047e5/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f6c696e6b6564696e2e737667"
              alt="LinkedIn Logo"
            />
          </a>
          <a href="mailto:apoorvrastogi58@gmail.com" target="_blank">
            <img
              className="contact_icons"
              src="https://camo.githubusercontent.com/4a3dd8d10a27c272fd04b2ce8ed1a130606f95ea6a76b5e19ce8b642faa18c27/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f676d61696c2e737667"
              alt="Gmail Logo"
            />
          </a>
          <a href="https://github.com/Apoorv-R98" target="_blank">
            <img
              className="contact_icons"
              src="https://camo.githubusercontent.com/b079fe922f00c4b86f1b724fbc2e8141c468794ce8adbc9b7456e5e1ad09c622/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f6769746875622e737667"
              alt="Github Logo"
            />
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
