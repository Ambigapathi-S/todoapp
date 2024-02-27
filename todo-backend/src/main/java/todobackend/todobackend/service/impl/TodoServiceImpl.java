package todobackend.todobackend.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import todobackend.todobackend.entity.Todo;
import todobackend.todobackend.repository.TodoRespository;
import todobackend.todobackend.service.TodoService;

import java.util.List;

@Service
@AllArgsConstructor
public class TodoServiceImpl implements TodoService {
    private TodoRespository todoRespository;
    @Override
    public Todo createTodo(Todo todo) {
        return todoRespository.save(todo);
    }

    @Override
    public List<Todo> getAllTodoList() {
        return todoRespository.findAll();
    }

    @Override
    public Todo getTodoListById(Long id) {
        Todo todo = todoRespository.findById(id).get();
        return todo;
    }

    @Override
    public Todo updateTodoList(Todo todo) {
        Todo existingList = todoRespository.findById(todo.getId()).get();
        existingList.setChecked(todo.isChecked());
        existingList.setDescription(todo.getDescription());
        return todoRespository.save(existingList);
    }

    @Override
    public void deleteTodoList(Long id) {
        todoRespository.deleteById(id);
    }

//    @Override
//    public List<Todo> FilterTodoList(String description) {
//        List<Todo> todo = todoRespository.findByName(description);
//        return todo;
//    }
}
