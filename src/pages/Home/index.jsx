import "./home.css"
import{ FiLink} from "react-icons/fi"
import { useState } from "react";

import Menu from "../../components/Menu";
import api from "../../services/api"
import LinkItem from "../../components/Linkitem";


export default function Home() {

  const [link,setLink]=useState("");
  const [showModal,setShowModal]=useState(false)
  const [data,setData]=useState({})
  async function hendleShortLinks(){
    try{
      const response = await api.post("/shorten",{
        long_url:link
      });
      setData(response.data);
      setShowModal(true);
      setLink('');
    }catch{
      alert("Ups parece que algo deu errado!");
      setLink('');
    }
  }

  return (
    <div className="container-home">
      <div className="logo">
        <img src="/public/logo.png" alt="logo ngunga links"></img>
        <h1>Ngunga Links</h1>
        <span>Coleu o seu link aqui 👇</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color="#FFF"></FiLink>
          <input
            placeholder="cole seu link aqui..."
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <button onClick={hendleShortLinks}>Encurtar Link</button>
      </div>
      <Menu></Menu>
      {showModal && (<LinkItem
      closeModal={()=>setShowModal(false)}
      content={data}
      ></LinkItem>)}
    </div>
  );
}
