package todobackend.todobackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import todobackend.todobackend.entity.Todo;

import java.util.List;

public interface TodoRespository extends JpaRepository<Todo, Long> {
}
