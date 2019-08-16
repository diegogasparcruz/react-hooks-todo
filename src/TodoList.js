import React from 'react';
import { List, ListItem, Checkbox, ListItemSecondaryAction, ListItemText, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoList = ({ todos, deleteTodo }) => (

  <List>
    {todos.map((todo, index) =>(

      <ListItem key={index.toString()} dense button>

        <Checkbox tabIndex={-1} disableRipple />
        <ListItemText primary={ todo } />

        <ListItemSecondaryAction>
          <IconButton
            arial-label="Delete"
            onClick={() => {
              deleteTodo(index);
            }}
          >
            <DeleteIcon />
          </IconButton>

        </ListItemSecondaryAction>

      </ListItem>

    ))}
  </List>

)

export default TodoList;