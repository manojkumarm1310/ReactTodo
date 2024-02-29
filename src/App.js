import React from "react";
import Home from "./components/Home";
import AddTodo from "./components/AddTodo";
import { Route, Routes } from "react-router-dom";
import EditTodo from "./components/EditTodo";
import TaskDetails from "./components/TaskDetails";
import { DataProvider } from "./context/DataContext";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <DataProvider>
      <div>
        <Routes>
          <Route path="/ReactTodo" element={<Home />} />
          <Route path="/addTodo" element={<AddTodo />} />

          <Route path="/edit" element={<EditTodo />} />

          <Route path="/todo/:id" element={<TaskDetails />} />
        </Routes>
      </div>
    </DataProvider>
  );
};

export default App;
