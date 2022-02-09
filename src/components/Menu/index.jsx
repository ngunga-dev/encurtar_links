import {BsYoutube,BsInstagram} from "react-icons/bs"
import "./menu.css"
import { Link } from "react-router-dom"
export default function Menu(){
    return (
      <div className="menu">
        <a
          className="social"
          href="https://www.youtube.com/channel/UC2NQ9eqWC4lLPA5XhAqm5rA"
        >
          <BsYoutube size={24} color="#fff"></BsYoutube>
        </a>

        <a
          className="social"
          href="https://www.instagram.com/ngunga_dev/?hl=pt"
        >
          <BsInstagram size={24} color="#fff"></BsInstagram>
        </a>
        <Link className="menu-item" to="/links">
          Meus Links
        </Link>
      </div>
    );
}