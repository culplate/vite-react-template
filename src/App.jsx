import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from 'shared/components';
import { WelcomePage } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<WelcomePage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
