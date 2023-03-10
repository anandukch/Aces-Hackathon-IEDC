import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import NavBar from '../Navbar'
import DoctorVisit from '../../../images/DoctorVisit.jpg'
import patientVisit from '../../../images/patientVisit.jpg'
import { useNavigate } from "react-router-dom";

export default function HomeMain() {

  const navigate = useNavigate()



  return (<>
  <NavBar />
  <Container>
    <Grid margin={5} container spacing={2}>
      <Grid item xs={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={DoctorVisit}
            alt="Book Appointment with Doctor."
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Book Appointment with Doctor.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={(()=>{
              navigate("/book")
            })}>Book Now</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={patientVisit}
            alt="Book Visit time with a patient."
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Book Visit time with a patient.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Book Now</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
    </Container>
  </>
    
  );
}
