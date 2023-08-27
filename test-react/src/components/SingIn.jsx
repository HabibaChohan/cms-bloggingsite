import React from 'react';



const SingIn = ()=> {
  return (
    <section className='form-section'>
    <div className='container form-section-container'>
      <h2>Sing In</h2>
      

      <form action="">
        <input type="text" placeholder='User Name Or Email' />
        <input type="password" placeholder='Password' />
        <button type='submit' className='btn'>Sing In</button>
        <small>Don't have an account <a href="./singup">Sing Up</a></small>
        </form>

    </div>
  </section>



    );
}

export default SingIn; 