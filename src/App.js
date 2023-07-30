
import './App.css';
import EditItempage from './pages/EditItempage';
import ItemDetailsPage from './pages/ItemDetailsPage';
import ItemListPage from './pages/ItemListPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewItemPage from './pages/NewItemPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* <ItemDetailsPage /> */}
        <Routes>
          <Route exact path="/" element={<ItemListPage />} />
          <Route exact path="/items/:id/edit" element={<EditItempage />} />
          <Route exact path="/items/:id" element={<ItemDetailsPage />} />
          <Route exact path="/items/new" element={<NewItemPage />} />

        </Routes>

      </div>
    </Router>
  );
}

export default App;
