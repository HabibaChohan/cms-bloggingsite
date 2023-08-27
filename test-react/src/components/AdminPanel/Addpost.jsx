import {React} from 'react';



const Addpost = () => {
 return (
    <section className='form-section'>
    <div className='container form-section-container'>
      <h2>Add Post</h2>
      

      <form action="">
        <input type="text" placeholder='Title' />
        <div className='form-control'>
          <label htmlFor="thumb">Add Picture</label>
          <input type="file"  id="thumb" />
        </div>
        <textarea rows="15" placeholder='Body'></textarea>
        
        <button type='submit' className='btn'>Add Post</button>
        
        </form>

    </div>
  </section>
  );
};

export default Addpost;