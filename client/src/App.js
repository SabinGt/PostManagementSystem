import './App.css';
import {BrowserRouter as Router, Route, Routes, Link}  from 'react-router-dom';
import Home from "./pages/Home";
import PostForm from './pages/PostForm';
import Post from './pages/Post';
function App() {
  
  

  return (
    <div className="App">
      <Router>
        <div className="navbar">
        <Link to="/">HomePage</Link>
        <Link to="/createpost">CreatePost</Link>
        </div>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/createpost' element={<PostForm/>}/>
          <Route exact path='/post/:id' element={<Post/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
