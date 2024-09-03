import React from 'react'
// import { Link } from 'react-router-dom'
import classe from '../assets/css/Home.module.css';
import { FaUpload } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <section className={classe.topAdd}>
        <div className={classe.block}>
          <div className={classe.blockInner}>
            <FaUpload />
          </div>
          <h4>Upload Video</h4>
        </div>
        <hr />
      </section>
      <section className={classe.contentVideo}>

      </section>
    </div>
  )
}

export default Home
