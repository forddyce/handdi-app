import React, { Suspense } from 'react';
import { SnackbarWrapper } from './layout/SnackbarWrapper';

import { createEmotionCache } from './utils/createEmotionCache';
import { CacheProvider } from '@emotion/react';

import './base.scss';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import { CssBaseline } from '@mui/material';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import publicRoutes from './config/publicRoutes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const clientSideEmotionCache = createEmotionCache();

const App = (props: any) => {
  const router = createBrowserRouter([...publicRoutes()]);
  const { emotionCache = clientSideEmotionCache } = props;

  return (
    <CacheProvider value={emotionCache}>
      <QueryClientProvider client={queryClient}>
        <SnackbarWrapper>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Suspense fallback={<>test</>}>
              <RouterProvider router={router} />
            </Suspense>
          </ThemeProvider>
        </SnackbarWrapper>
      </QueryClientProvider>
    </CacheProvider>
  );
};

export default App;
