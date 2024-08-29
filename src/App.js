
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Initial from './pages/Initial.js';

// Create this component if it doesn't exist

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Initial />} />
         
        </Routes>
      
   
    </BrowserRouter>
  );
}

export default App;
