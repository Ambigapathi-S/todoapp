import React from 'react'
import ListItem from './listItem';

const listItems = ({ items, handleCheck, deleteTask, checked, setChecked }) => {
  return (
    <ul>
      {
        items.map((item) => (
          <ListItem
            item={item}
            handleCheck={handleCheck}
            deleteTask={deleteTask}
            checked={checked}
            setChecked={setChecked}
            key={item.id}
          />
        ))
      }
    </ul>
  )
}

export default listItems