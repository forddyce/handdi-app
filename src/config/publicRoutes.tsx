import Layout from '../layout/Layout';
import { Index, Onboard, NotFound } from './views';

const publicRoutes = () => {
  return [
    {
      errorElement: <NotFound />,
      element: <Layout />,
      children: [
        {
          path: '/',
          name: 'Home',
          element: <Index />,
        },
        {
          path: '/onboard',
          name: 'Onboard',
          element: <Onboard />,
        },
      ],
    },
  ];
};

export default publicRoutes;
