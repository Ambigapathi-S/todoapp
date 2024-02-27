import React from 'react'

const addTask = ({ description, setDescription, saveTask, cancelTask }) => {
  return (
    <div className='addForm'>
      <form method="POST" onSubmit={(e) => saveTask(e)}>
        <h3>Add Task Here ! </h3>
        <input type='text' name='description' value={description} placeholder='Enter the task title' onChange={(e) => setDescription(e.target.value)} required />
        <div className='button-group center'>
          <button type='submit' className='primary-btn'>Submit</button>
          <button type='button' className='cancel-btn' onClick={() => cancelTask()}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default addTask