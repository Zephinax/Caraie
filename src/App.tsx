import Routes from './Pages/Routes';
import { useRoutes } from 'react-router-dom';
import Header from './Components/Header/Header';

export default function App() {
  const router = useRoutes(Routes);
  return (
    <>
      <Header />
      {router}
    </>
  );
}
