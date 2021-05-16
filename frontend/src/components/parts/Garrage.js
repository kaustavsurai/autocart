import { React, useState, useEffect } from 'react'
import {Container,Row, Col} from "react-bootstrap";
import Location from './Location';
import Addtask from './AddTask';

const Garrage = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  // // Fetch Task
  // const fetchTask = async (id) => {
  //   const res = await fetch(`http://localhost:5000/tasks/${id}`)
  //   const data = await res.json()

  //   return data
  // }

  // Add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })

    const data = await res.json()

    setTasks([...tasks, data])

    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
  }
  return (
    <div className="Garrage-section bg-image">
      <div className="welcome-text text-center">
        <h3>Welcome Xyz</h3>
      </div>
      <Container className=" mt-5">
        <Row className="maps">
          <Col xs={12} md={6} lg={6} className="d-flex align-items-center justify-content-center">
            <div className="map-container w-100 text-center text-dark ">
              <h5>Location</h5>
               <Location />
            </div>
          </Col>
          <Col xs={12} md={6} lg={6}>
              <div className="form-box mobi-box w-100 h-100 d-flex align-items-center">
                <Addtask onAdd={addTask}/>
              </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Garrage
