import React from 'react';
import logo from '../image/logo_media_bird.png';
import '../StylesCss/Home.css';

const Home = () => {
    return (
        <div>
    <section className='details_home'>
          <div className='container'>
          <img src={logo} alt="logo enteprise" className='logo'/>
            <h1>MEDIA BIRD</h1>
            <p>AUDIO VISUELLE</p>
            <div className='butt_medias'>
              <button type="">Mail</button>
              <button type="">Instagram</button>
            </div>
          </div>
      </section>
        </div>
    );
};

export default Home;