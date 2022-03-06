import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Formcomponent from './Formcomponent';
import { getUsers } from './actions/users';
import { Routes, Route, Link } from "react-router-dom";
import UserLists from './UserLists';
import {useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
 
  useEffect(() => {
    dispatch(getUsers());
  }, [users]);

  return (
    <div className="App">
    <h1>CRUD REGISTRATION APP </h1>
     <Routes>
     <Route path='/userList' element={<UserLists />} />
     <Route path="/" element={ <Formcomponent />} />
    
      </Routes>
  
    </div>
  );
}

export default App;
