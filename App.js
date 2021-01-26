import React, {useState} from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import {NavBar} from "./src/components/NavBar";
import {MainScreen} from "./src/screens/MainScreen";
import {TodoScreen} from "./src/screens/TodoScreen";

export default function App() {
const [todoId, setTodoId]=useState(null);
const [todos, setTodos]= useState([
  {id: "1", title : "Когда же это кончится"},
  {id: "2", title : "Когда же это кончится2"},
  {id: "3", title : "Когда же это кончится3"}
]);

  const addTodo = title => {
    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title
      }
    ]);
  };

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  let content =(
    <MainScreen
    todos={todos}
    addTodo={addTodo}
    removeTodo={ removeTodo }
    openTodo={setTodoId}
    />
  );

  if (todoId) {
    const selectedTodo = todos.find(todo => todo.id === todoId);
    content =(
      <TodoScreen
      goBack={() => {
        setTodoId(null);
      }}
      todo={selectedTodo}
      />
    );
  }

  return (
    <View>
      <NavBar title = "Todo App" />
    <View style={styles.container}>{content} </View>      
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});

