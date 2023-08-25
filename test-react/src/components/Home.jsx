import React from 'react';



const Home = ()=> {
  return (
    <section className='featured'>
      <div className='container featured-container'>
        <div className='post-thumb'>
          <img src="./images/electric.png" alt="" />
        </div>
        <div className='post-info'>
          <div className='category-btn'>Discovery</div>
          <h2 className='post-title'>
            <a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </a>
          </h2>
          <p className='post-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tempore dolorem recusandae dolorum, odit consequatur voluptate est distinctio nemo aliquid pariatur eveniet eligendi impedit earum quas, officia inventore, repudiandae facilis?
          </p>
        </div>

        <div className='post-profile'>
          <div className='post-profile-img'>
            <img src="./images/profileimg.jpg" alt="" />
          </div>

          <div className='post-profile-info'>
            <h5>Anny Ria</h5>
            <small>june 14, 2023 - 10:24</small>
          </div>
        </div>
      </div>
    </section>

  



    );
}

export default Home; 