import React from 'react';



const ManageUser = ()=> {
  return (
    <section className='form-section'>
    <div className='container form-section-container'>
      <h2>Edit User</h2>
      

      <form action="">
        <input type="text" placeholder='First Name' />
        <input type="text" placeholder='Last Name' />
        

        <select>
            <option value="0">Admin</option>
            <option value="1">Author</option>
        </select>
        
       

        <button type='submit' className='btn'>Update User</button>
        
        </form>

    </div>
  </section>



    );
}

export default ManageUser; 