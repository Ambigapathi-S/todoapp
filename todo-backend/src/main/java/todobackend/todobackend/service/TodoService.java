package todobackend.todobackend.service;

import todobackend.todobackend.entity.Todo;

import java.util.List;

public interface TodoService {
    Todo createTodo(Todo todo);

    List<Todo> getAllTodoList();

    Todo getTodoListById(Long id);

    Todo updateTodoList(Todo todo);

    void deleteTodoList(Long id);

//    List<Todo> FilterTodoList(String description);

}
