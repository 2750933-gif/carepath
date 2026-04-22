import { RouterProvider } from 'react-router';
import { router } from './routes';
import { LanguageProvider } from './context/LanguageContext';
import { UserProvider } from './context/UserContext';

export default function App() {
  return (
    <LanguageProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </LanguageProvider>
  );
}