import React, { useEffect } from 'react'
import './App.css';
import Header from './component/Header';
import Box from './component/Box';
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './Action';


const App = () => {
  const dispatch = useDispatch();
  const { Tickets } = useSelector(state => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch])

  return Tickets && (
    <div className='Home'>
      <Header />
      <Box />
    </div>
  )
}

export default App