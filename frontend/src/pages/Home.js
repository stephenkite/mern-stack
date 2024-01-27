import { useEffect, useState } from 'react'

// components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {

  const [workouts, setWorkouts] = useState(null) // creating some local state

  // useEffect fires a fn when the component is rendered
  useEffect(() => {
    // we defined this constant so that we can use the async keyword
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts')
      const json = await response.json() // parsing the json in response into something we can work with

      if(response.ok){
        setWorkouts(json) // updating the local state
      }
    }

    fetchWorkouts()
  },[]) // We only want to fire it one when the component is first rendered, to do that we pass in an empty array(called dependency)

  return (
    <div className="home">
      <div className='workout'>
        {workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout = {workout} />
        ))} 
      </div>

      <WorkoutForm />
    </div>
  )
}

export default Home