import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { route } from './routes/route/route';

function App() {
  return (
    <div className="max-w-screen-xl mx-auto font-serif overflow-hidden">
      <RouterProvider router={route}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
