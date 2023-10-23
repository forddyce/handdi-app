import styles from '../../modules/Home/Index.module.scss';
import { Grid, Box, Stack } from '@mui/material';
import { useEffect, useState } from 'react';

const InstructionAndroid = () => {
  const [supportsPWA, setSupportsPWA] = useState<boolean>(false);
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
      className={styles.container}
    >
      <Grid item>
        <h1 className={styles.header}>MAKE IT A MOBILE APP!</h1>

        <Box
          display="flex"
          flexDirection="column"
          className={styles.box}
          alignItems="center"
          justifyContent="center"
        >
          <img src="/images/mobile.png" alt="mobile_icon" className={styles.boxIcon} />
          <p className="font-bold">For Android Users</p>
          <ol className={styles.steps}>
            <li>
              Open this page on <strong>Chrome</strong>
            </li>
            <li>Click on Download App button below</li>
            <li>
              If button does not appear, you need to open with Chrome or the app is actually already installed
              on your device
            </li>
          </ol>
          <p className="font-bold">Get timely reminders of your servicing</p>
          {supportsPWA ? (
            <p className={styles.alert}>
              You either have ever downloaded the app on your device, or you need to use Google Chrome to
              download the App.
            </p>
          ) : (
            <button className={styles.button} type="button" onClick={() => bookmark()}>
              Download App
            </button>
          )}
        </Box>

        <Stack spacing={3} direction="column" className={styles.footer}>
          <p>
            Please note that our app is by invite only for customers and official partners as we are still in
            beta.
          </p>
          <p className={styles.muted}>Receive timely reminders, promotions and world class support by downloading our app!</p>
          <a href="https://wa.me/+6580434254?text=Hello%21" className={styles.button}>
            Not sure how to install? Reach us!
          </a>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default InstructionAndroid;
