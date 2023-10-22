import Layout from '../layout/Layout';
import { Index, NotFound } from './views';

const publicRoutes = () => {
  return [
    {
      path: '/',
      name: 'Home',
      errorElement: <NotFound />,
      element: <Layout />,
      children: [
        {
          path: '/',
          name: 'Home',
          element: <Index />,
        },
      ],
    },
  ];
};

export default publicRoutes;
