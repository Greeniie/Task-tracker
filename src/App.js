import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import Addtask from './components/Addtask'


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    // {
    //   id: 1,
    //   text: "Doctor's Appointment",
    //   day: 'Feb 5th at 2:30pm',
    //   reminder: true,
    // },
    // {
    //   id: 2,
    //   text: "Meeting at School",
    //   day: 'Feb 6th at 1:30pm',
    //   reminder: true,
    // },
    // {
    //   id: 3,
    //   text: "Grocery Shopping",
    //   day: 'Feb 9th at 11:30am',
    //   reminder: false,
    // }

  ])

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1

  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}  

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
 
}  

const toggleReminder = (id) => {
  setTasks(tasks.map((task => task.id === id ? {...task, reminder : !task.reminder} : task)))
}

  return (
    <div className="container">
     <Header onAdd = {() => setShowAddTask (!showAddTask)} showAdd = {showAddTask} />
     {showAddTask && <Addtask onAdd = {addTask} />}
     {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder} /> : 'No tasks available '}
  
    </div>
  );
}

export default App;
