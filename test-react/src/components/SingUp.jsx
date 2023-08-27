import React from 'react';



const SingUp = ()=> {
  return (
    <section className='form-section'>
    <div className='container form-section-container'>
      <h2>Sing Up</h2>
      

      <form action="">
        <input type="text" placeholder='First Name' />
        <input type="text" placeholder='Last Name' />
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Password' />
        
        <div className='form-control'>
          <label htmlFor="profile-img">Upload Profile Image</label>
          <input type="file"  id="upload-img" />
        </div>

        <button type='submit' className='btn'>Sing Up</button>
        <small>Already have an account <a href="./singin">Sing IN</a></small>
        </form>

    </div>
  </section>



    );
}

export default SingUp; 