import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import RouterData from './routes';
import { RouterProvider } from 'react-router-dom';

function App() {
  const route = RouterData();
  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}

export default App;
