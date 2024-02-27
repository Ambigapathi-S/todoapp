package todobackend.todobackend.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import todobackend.todobackend.entity.Todo;
import todobackend.todobackend.service.TodoService;

import java.util.List;
@CrossOrigin(
        origins = {
                "http://localhost:3000",
                "*",
        },
        methods = {
                RequestMethod.OPTIONS,
                RequestMethod.GET,
                RequestMethod.PUT,
                RequestMethod.DELETE,
                RequestMethod.POST
        })
@RestController
@AllArgsConstructor
@RequestMapping("api/todo")
public class TodoController {
    private TodoService todoService;
    @PostMapping("/create")
    public ResponseEntity<Todo> createTodo(@RequestBody Todo todo) {
        Todo savedTodoList = todoService.createTodo(todo);
        return new ResponseEntity<>(savedTodoList, HttpStatus.CREATED);
    }

    @GetMapping("/lists")
    public ResponseEntity<List<Todo>> getAllTodoList() {
        List<Todo> list = todoService.getAllTodoList();
        return ResponseEntity.ok().body(list);
    }
    @GetMapping("/lists/{id}")
    public ResponseEntity<Todo> getTodoListById(@PathVariable("id") Long id) {
        Todo list = todoService.getTodoListById(id);
        return ResponseEntity.ok().body(list);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Todo> updateTodoList(@RequestBody Todo todo, @PathVariable("id") Long id) {
        Todo list = todoService.getTodoListById(id);
        list.setChecked(todo.isChecked());
        list.setDescription(todo.getDescription());
        Todo updatedTodoList = todoService.updateTodoList(list);
        return new ResponseEntity<>(updatedTodoList, HttpStatus.CREATED);

    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<String> deleteTodoList(@PathVariable("id") Long id) {
        todoService.deleteTodoList(id);
        // return new ResponseEntity<>("List Deleted Successfully", HttpStatus.NO_CONTENT);
        return ResponseEntity.ok("List deleted successfully!");

    }

//    @GetMapping("query")
//    public ResponseEntity<List<Todo>> FilterTodoList(@RequestParam Long id, @RequestParam String description) {
//        List<Todo> todo = todoService.FilterTodoList(description);
//        return ResponseEntity.ok().body(todo);
//    }

}
