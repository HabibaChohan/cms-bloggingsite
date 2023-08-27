import React from 'react';



const AddCategory = ()=> {
  return (
    <section className='form-section'>
    <div className='container form-section-container'>
      <h2>Add Category</h2>
      

      <form action="">
        <input type="text" placeholder='Title' />
        <textarea rows="4" placeholder='Description'></textarea>
        
        <button type='submit' className='btn'>Add Category</button>
        
        </form>

    </div>
  </section>

    );
}

export default AddCategory; 