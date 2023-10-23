import Layout from '../layout/Layout';
import { Index, InstructionAndroid, InstructionIos, Onboard, NotFound } from './views';

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
          path: '/instruction/android',
          name: 'Instruction Android',
          element: <InstructionAndroid />,
        },
        {
          path: '/instruction/ios',
          name: 'Instruction IOS',
          element: <InstructionIos />,
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
