import "./links.css";
import {FiArrowLeft,FiLink,FiTrash}from 'react-icons/fi'
import { Link } from "react-router-dom";
export default function Links() {
  return (
    <div className="links-container">
      <div className="links-header">
        <Link to="/">
          <FiArrowLeft size={38} color="#FFF"></FiArrowLeft>
        </Link>
        <h1>Meus Links</h1>
      </div>

      <div className="links-item">
        <button className="link">
          <FiLink size={20} color="#fff"></FiLink>
          https://ngungadev.com
        </button>
        <button className="link-delete">
          <FiTrash size={20} color="#FF5454"></FiTrash>
        </button>
      </div>
    </div>
  );
}
