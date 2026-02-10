import '@/app/styles/global.scss';
import 'antd/dist/reset.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
