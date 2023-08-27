import React from 'react';
import './Style.css';

 
import {FiPlus} from 'react-icons/fi';
import {FaPen} from 'react-icons/fa';
import {FaUserEdit} from "react-icons/fa"
import {PiUsersThreeFill} from "react-icons/pi"
import {BiSolidMobile} from 'react-icons/bi'

import {BsListUl} from 'react-icons/bs';






const Dashboard = ()=> {
  return (
   <section className='Dashboard'>
    <div className='container dashboard-container'>
        <aside>
            <ul>
                <li><a href="addpost">
                <FiPlus />
                    <h5> Add Post</h5>
                </a></li>

                <li><a href="managepost">
                <FaPen />
                    <h5>Manage Post</h5>
                </a></li>

                <li><a href="adduser">
                <FaUserEdit />
                    <h5>Add User</h5>
                </a></li>

                <li><a href="manageuser">
                <PiUsersThreeFill size='1.2rem'/>
                    <h5>Manage User</h5>
                </a></li>

                <li><a href="addcategory">
                <BiSolidMobile />
                    <h5>Add Category</h5>
                </a></li>

                <li><a href="managecategory" className='active'>
                <BsListUl />
                    <h5>Manage Category</h5>
                </a></li>
            </ul>
        </aside>
        <main>
            <h2>Manage Category</h2>
            <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Tips & Guide</td>
                    <td><a href="managecategory" className='btn sm'> Edit </a></td>
                    <td><a href="managecategory" className='btn sm danger'> Delete</a></td>
                </tr>

                <tr>
                    <td>Best E-Scooter</td>
                    <td><a href="managecategory" className='btn sm'> Edit </a></td>
                    <td><a href="managecategory" className='btn sm danger'> Delete</a></td>
                </tr>

                <tr>
                    <td>Toodler E-Scooter</td>
                    <td><a href="amanagecategory" className='btn sm'> Edit </a></td>
                    <td><a href="managecategory" className='btn sm danger'> Delete</a></td>
                </tr>

                <tr>
                    <td>Budget Scooter</td>
                    <td><a href="managecategory" className='btn sm'> Edit </a></td>
                    <td><a href="managecategory" className='btn sm danger'> Delete</a></td>
                </tr>
            </tbody>
            </table>
        </main>




      { /* <main>
            <h2>Add User</h2>
            <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>User Name</th>
                    <th>Admin</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Habiba Chohan</td>
                    <td>Habichn</td>
                    <td>Yes</td>
                    <td><a href="adduser" className='btn sm'> Edit </a></td>
                    <td><a href="adduser" className='btn sm danger'> Delete</a></td>
                </tr>

                <tr>
                    <td>Hina</td>
                    <td>-</td>
                    <td>No</td>
                    <td><a href="adduser" className='btn sm'> Edit </a></td>
                    <td><a href="adduser" className='btn sm danger'> Delete</a></td>
                </tr>

                <tr>
                    <td>Arbish</td>
                    <td>-</td>
                    <td>No</td>
                    <td><a href="adduser" className='btn sm'> Edit </a></td>
                    <td><a href="adduser" className='btn sm danger'> Delete</a></td>
                </tr>

        
            </tbody>
            </table>
        </main>*/}
    </div>
   </section>




    );
}




export default Dashboard; 