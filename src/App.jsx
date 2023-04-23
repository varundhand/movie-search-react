import './App.css'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'
import Title from './components/Title'
import Error from './components/Error'
import Cards from './components/Cards'
import Pagination from './components/Pagination'
import { useState } from 'react'

function App() {

  return (
  <>
    <Navbar/>
    <Title/>
    <Searchbar />
    {/* <Error/>  */}
    {/* <Cards/> */}
    {/* <Pagination/> */}

  </>
  )
}

export default App
