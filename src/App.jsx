import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ShowCreators from "./pages/ShowCreators";
import ViewCreator from "./pages/ViewCreator";
import AddCreator from "./pages/AddCreator";
import EditCreator from "./pages/EditCreator";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ShowCreators />} />
            <Route path="/creator/:id" element={<ViewCreator />} />
            <Route path="/add" element={<AddCreator />} />
            <Route path="/edit/:id" element={<EditCreator />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
