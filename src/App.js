import { RouterProvider } from 'react-router-dom';
import './App.css';
import { route } from './routes/route/route';

function App() {
  return (
    <div className='max-w-screen-xl mx-auto font-serif overflow-hidden'>
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
