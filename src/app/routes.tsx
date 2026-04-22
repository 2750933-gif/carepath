import { createBrowserRouter } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import DescribeSituation from './pages/DescribeSituation';
import WhereToGo from './pages/WhereToGo';
import WaitTimes from './pages/WaitTimes';
import FamilyDoctor from './pages/FamilyDoctor';
import Appointment from './pages/Appointment';
import History from './pages/History';
import Documents from './pages/Documents';
import Admin from './pages/Admin';
import Testimonials from './pages/Testimonials';
import Help from './pages/Help';
import Dashboard from './pages/Dashboard';
import Pricing from './pages/Pricing';
import Payment from './pages/Payment';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'describe', Component: DescribeSituation },
      { path: 'where-to-go', Component: WhereToGo },
      { path: 'wait-times', Component: WaitTimes },
      { path: 'family-doctor', Component: FamilyDoctor },
      { path: 'appointment', Component: Appointment },
      { path: 'history', Component: History },
      { path: 'documents', Component: Documents },
      { path: 'admin', Component: Admin },
      { path: 'testimonials', Component: Testimonials },
      { path: 'help', Component: Help },
      { path: 'dashboard', Component: Dashboard },
      { path: 'pricing', Component: Pricing },
      { path: 'payment', Component: Payment },
      
      { path: 'login', Component: Login },
      { path: '*', Component: NotFound },
    ],
  },
]);
