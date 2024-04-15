import { Grid } from "@mui/material";
import PersistentDrawerLeft from "../components/Nav2";
import GridPicture from "../components/GridPicture";

export default async function ContactPage() {
  const response = await fetch("http://localhost:3000/api/grid", {
    cache: "no-store",
  });
  const data = await response.json();
  console.log("dataFrommmmmmm:::::::", data);

  return (
    <div>
      <PersistentDrawerLeft>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1>Grid Page</h1>
        </div>
        <Grid container spacing={3}>
            {data.map((item:any) => {
                return <Grid item xs={4}>
                    <GridPicture title={item.title} subtitle={item.subtitle} image={item.image} />
                </Grid>
            })}
        </Grid>
      </PersistentDrawerLeft>
    </div>
  );
}
