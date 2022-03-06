import React from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from './api';



function UserLists() {
  const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    console.log(users,"Tanay Tapanshu")
  return (
    <div className='Userlists'>
    <ol>
      {users.map((user,index) => {
        return(
        <li 
        key={index}
        style={{
          backgroundColor: 'white',
    padding: '10px',
    marginBottom: '25px',
    
        width:'300px'
        }}>
          <div className="user">
          <h3 style={{margin:0}}>{user.firstName}  {user.lastName}</h3>
      
                <h5>{user.email}</h5>
                  <h5>{user.city}</h5>

    <h4 size="small" style={{
      color:"red"
    }} onClick={() => dispatch(deleteUser(user._id))}> Delete</h4>
          </div>
          </li>

        )
      } )}
      </ol>
    </div>
  )
}

export default UserLists