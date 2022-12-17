import { CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import NavBar_Admin from "../NavBar_admin";

import Doc from "../../../images/doctor2.jpg";
import DocPat from "../../../images/doctorpatient.jpg";
import PatVis from "../../../images/patientvisit.jpg";
import { useNavigate } from "react-router-dom";

export default function HomeAdmin() {
  const navigate = useNavigate();
  return (
    <>
      <NavBar_Admin />
      <Container>
        <Grid margin={5} container spacing={2}>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={Doc}
                alt="Set Doctor's schedule"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Set Doctor's schedule
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => {
                    navigate("/admin/app");
                  }}
                >
                  See Schedule
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={DocPat}
                alt="View Doctor Appointments"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Add Doctor
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => {
                    navigate("/admin/createdoc");
                  }}
                >
                  Add
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={PatVis}
                alt="View scheduled patient visits"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  View scheduled patient visits
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View Log</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
