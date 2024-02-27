import React from 'react';
import { FaTrash } from "react-icons/fa";

const listItem = ({ item, handleCheck, deleteTask, checked, setChecked }) => {
  return (
    <li className="item">
      <label className='checkbox'>
        <input type='checkbox' checked={item.checked} value={checked} onChange={(e) => { setChecked(e.target.checked); handleCheck(item.id) }} />
        <span className="checkmark"></span>
      </label>
      <p className='title'>{item.description}</p>
      <p className='icons'>
        <span className='trashIcon'><FaTrash onClick={() => deleteTask(item.id)} /></span>
      </p>
    </li>
  )
}

export default listItem