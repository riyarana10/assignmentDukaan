import "./footer.css";
import logo from "../../assets/logo/logo.png";
import flag from "../../assets/flag.svg";
function Footer() {
  return (
    <div className = "footer">
    
      <div className="footelement extra">
        <div className="logo">
            <img src = {logo}/>
        </div>
        <div className="list-box">
            <ul className = "list">
                <li> <a href = "">Contact</a></li>
                <li> <a href = "">FAQ's</a></li>
            </ul>
        </div>
        <div className="list-box">
            <ul className = "list">
                <li> <a href = "">Tutorials</a></li>
                <li><a href = "">Blog</a></li>
            </ul>
        </div>
        <div className="list-box">
            <ul className = "list">
                <li><a href = "">Privacy</a></li>
                <li><a href = "">Banned Items</a></li>
            </ul>
        </div>
        <div className="list-box">
            <ul className = "list">
                <li><a href = "">About</a></li>
                <li><a href = "">Jobs<span className="number">3</span></a></li>
            </ul>
        </div>
        <div className="list-box">
            <ul className = "list">
                <li><a href = "">Facebook</a></li>
                <li><a href = "">Twitter</a></li>
                <li><a href = "">Linkedin</a></li>

            </ul>
        </div>
      </div>
      <hr className="divider"></hr>
      <div className = "footelement">
        <div className = "slogan">
            Dukaan 2022, All rights reserved.
        </div>
        <div className = "flag-logo">
            <div className="madein">
                Made in
            </div>
            <div className="flag">
                <img src = {flag}/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;