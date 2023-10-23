import { Grid, Box, Stack } from '@mui/material';
import styles from '../../modules/Home/Index.module.scss';

const Onboard = () => {
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
        <h1 className={styles.header}>Welcome to the Handdi Ecosystem</h1>
        <p className={styles.subHeader}>Are you a customer or partner?</p>

        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={3}>
          <Box
            display="flex"
            flexDirection="column"
            className={styles.box}
            alignItems="center"
            justifyContent="center"
          >
            <h2>Customers</h2>
            <img src="./images/customer.png" alt="cat_icon" className={styles.boxIcon} />
            <a className={styles.button} href="https://client.handdi.io">
              Enter
            </a>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            className={styles.box}
            alignItems="center"
            justifyContent="center"
          >
            <h2>Partners</h2>
            <img src="./images/partner.png" alt="cat_icon" className={styles.boxIcon} />
            <a className={styles.button} href="https://partners.handdi.io">
              Enter
            </a>
          </Box>
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

export default Onboard;
