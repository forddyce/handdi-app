import { Link } from 'react-router-dom';
import { Grid, Box, Stack } from '@mui/material';
import styles from '../../modules/Home/Index.module.scss';

const InstallPrompt = () => {
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
        <h1 className={styles.header}>
          <img src="./images/love.png" alt="love_icon" /> Welcome to the Handdi Ecosystem <img src="./images/love.png" alt="love_icon" />
        </h1>

        <Box
          display="flex"
          flexDirection="column"
          className={styles.box}
          alignItems="center"
          justifyContent="center"
        >
          <img src="./images/cat.png" alt="cat_icon" className={styles.boxIcon} />
          <h2>Make your home dashboard a mobile app!</h2>
          <p>Get timely updates on all your services, utilize your cashback for more cost savings and receive world class support from our team by downloading our app</p>
          <Box className={styles.buttonsContainer}>
          <Link to="/instruction/ios" className="theme-button-inverse">I am an IOS User</Link>
          <Link to="/instruction/android" className="theme-button-inverse">I am an Android User</Link>
          <Link to="/onboard" className="theme-button">Continue Via Web</Link>
          </Box>
        </Box>

        <Stack spacing={3} direction="column" className={styles.footer}>
          <p>Please note that our app is by invite only for customers and official partners as we are still in beta.</p>
          <a href="https://wa.me/+6580434254?text=Hello%21" className={styles.button}>
            Contact us for an invite
          </a>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default InstallPrompt;
