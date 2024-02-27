import React from 'react'
import ListItems from './listItems';

const content = ({ items, handleCheck, deleteTask, checked, setChecked }) => {
  return (
    <>
      {
        items.length ? (
          <ListItems items={items}
            handleCheck={handleCheck}
            deleteTask={deleteTask} 
            checked={checked}
            setChecked={setChecked}
            />
        ) : (
          <p>List is empty</p>
        )
      }
    </>
  )
}

export default content