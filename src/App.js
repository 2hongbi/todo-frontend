import './App.css';
import Todo from './Todo';
import React, { useState } from "react";
import { Container, List, Paper } from "@mui/material";
import AddTodo from './AddTodo';

function App() {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        item.id = "ID-" + items.length;
        item.done = false;

        setItems([...items, item]);
        console.log("items : ", items);
    }

    const deleteItem = (item) => {
        // 삭제할 아이템 탐색
        const newItems = items.filter(e => e.id !== item.id);

        // 삭제할 아이템을 제외한 아이템을 다시 배열에 저장
        setItems([...newItems]);
    }

    let todoItems = items.length > 0 && (
        <Paper style={{ margin: 16 }}>
            <List>
                {items.map((item) => (
                    <Todo item={item} key={item.id} deleteItem={deleteItem} />
                ))}
            </List>
        </Paper>
    );

    return (<div className="App">
            <Container maxWidth="md">
                <AddTodo addItem={addItem} />
                <div className="TodoList">{todoItems}</div>
            </Container>
        </div>);
}

export default App;
