import { Grid } from "@mui/material";
import PersistentDrawerLeft from "./components/Nav2";
import CardInfo from "./components/CardInfo";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import LinearProgressBar from "./components/LinearProgressBar";
import DataGridComponent from "./components/DataGridComponent";

export default function Home() {
  return (
    <main>
      <PersistentDrawerLeft>
        <Grid container margin="30px 0">
          <Grid item xs={6}>
            <LinearProgressBar />
          </Grid>
        </Grid>
        <Grid container spacing={2} margin="30px 0">
          <Grid item xs={6}>
            <CardInfo startIcon={<LocalAtmIcon />} title="casino" />
          </Grid>
          <Grid item xs={6}>
            <CardInfo startIcon={<SportsBasketballIcon />} title="sport" />
          </Grid>
        </Grid>
        <Grid container marginTop={5} marginBottom={30}>
          <Grid item xs={12}>
            <DataGridComponent />
          </Grid>
        </Grid>
      </PersistentDrawerLeft>
    </main>
  );
}
