
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Initial from './pages/Initial.js';
import Profile from './pages/Profile.js';
import Coaches from './pages/Coaches.js';

// Create this component if it doesn't exist

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Initial />} />
         <Route path="/profile" element={<Profile />} />
         <Route path="/coach" element={<Coaches />} />
        </Routes>
      
   
    </BrowserRouter>
  );
}

export default App;
