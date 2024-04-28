import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard';
import { useState } from 'react';

function App() {
  const loadedCoffee = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffee);


  return (
    <>
      <h1 className='text-6xl text-purple-600 text-center font-semibold'>Coffee: {loadedCoffee.length}</h1>
      {
        loadedCoffee.map(coffee => <CoffeeCard
        key={coffee._id}
        coffee={coffee}
        coffees = {coffees}
        setCoffees = {setCoffees}
        ></CoffeeCard>)
      }
    </>
  )
}

export default App
