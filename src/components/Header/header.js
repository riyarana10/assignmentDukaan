import "./header.css";
import logo from "../../assets/logo/logo.png";
function Header() {
  return (
    <div className="header">
      <div className="navbar">
        <div className="navelement">
            <div>
                <img src = {logo} />
            </div>
            <div>
                    <button className = "btn">Sign in</button>
                    <button className = "btn1">Dukaan for PC</button>
            </div>
        </div> 
      </div>
    </div>
  );
}

export default Header;
