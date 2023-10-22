import { useEffect, useState } from 'react';
import { Grid, Box, Stack } from '@mui/material';
import styles from './Index.module.scss';

const InstallPrompt = () => {
  const [supportsPWA, setSupportsPWA] = useState<boolean>(true);
  const [promptInstall, setPromptInstall] = useState<any>(null);

  const bookmark = () => {
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('transitionend', handler);
  }, []);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '85vh', padding: '18px 30px' }}
    >
      <Grid item>
        <h1 className={styles.header}>
          Make It A Mobile App! <img src="./images/love.png" alt="love_icon" />
        </h1>

        <Box
          display="flex"
          flexDirection="column"
          className={styles.box}
          alignItems="center"
          justifyContent="center"
        >
          <img src="./images/cat.png" alt="cat_icon" className={styles.boxIcon} />
          <h2>Bookmark The App</h2>
          <p>Track all your appointments and cashback, all in one place</p>
          {!supportsPWA ? (
            <p>Please use Chrome to open this app</p>
          ) : (
            <button className={styles.button} type="button" onClick={() => bookmark()}>
              Download App
            </button>
          )}
        </Box>

        <Stack spacing={3} direction="column" className={styles.footer}>
          <p>Please note that our app is by invite only for customers and official partners.</p>
          <a href="https://wa.me/+6580434254?text=Hello%21" className={styles.button}>
            Contact us for an invite
          </a>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default InstallPrompt;
