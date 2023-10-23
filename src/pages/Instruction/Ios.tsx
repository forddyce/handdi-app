import styles from '../../modules/Home/Index.module.scss';
import { Grid, Box, Stack } from '@mui/material';
import PWAPrompt from 'react-ios-pwa-prompt';

const InstructioIos = () => {
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
          <p className="font-bold">For IOS Users</p>
          <ol className={styles.steps}>
            <li>
              Open this page on <strong>Chrome</strong> or <strong>Safari</strong>
            </li>
            <li>
              Scroll all the way down and click on the
              <span className={styles.iosIcons}>
                <img src="/images/ios1.png" alt="ios_icon" />
                <img src="/images/ios1.png" alt="ios_icon" />
                <img src="/images/ios1.png" alt="ios_icon" />
              </span>
              icon
            </li>
            <li>
              A pop up will appear &gt; Select <strong>Add Bookmark/ Homescreen</strong>
            </li>
            <li>
              Then select <strong>"Done"</strong>
            </li>
          </ol>
          <PWAPrompt
            promptOnVisit={1}
            timesToShow={3}
            copyClosePrompt="Close"
            permanentlyHideOnDismiss={false}
          />
          <a href="https://wa.me/+6580434254?text=Hello%21" className={styles.button}>
            Not sure how to install? Reach us!
          </a>
        </Box>

        <Stack spacing={3} direction="column" className={styles.footer}>
          <p>
            Please note that our app is by invite only for customers and official partners as we are still in
            beta.
          </p>
          <p className={styles.muted}>
            Receive timely reminders, promotions and world class support by downloading our app!
          </p>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default InstructioIos;
