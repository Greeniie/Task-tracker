import {FaTrash} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
    return (
        <div className = {`task ${task.reminder? 'reminder' : ''}`} onDoubleClick = {() => onToggle(task.id)}>
          <h3 style = {{color: 'steelblue'}}>{task.text} <FaTrash style = {{color: 'red', cursor: 'pointer'}} onClick = {() => onDelete (task.id)}/></h3>
          <p style = {{color: 'black'}}>{task.day}</p>  
        </div>
    )
}

export default Task
