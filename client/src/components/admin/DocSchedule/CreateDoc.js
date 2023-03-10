import { Avatar, Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import { addDoctor } from "../../../apis";
import NavBar_Admin from "../NavBar_admin";
import {useNavigate} from 'react-router-dom'

export default function CreateDoc() {
  const navigate=useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    addDoctor({
      name: data.get("fullName"),
      phno: data.get("phno")
    }).then((res) => {
      console.log(res)
      navigate('/admin/docschedule')
    }).catch((err) => {
      console.log(err)
    })


  };

  return <>
    <NavBar_Admin />
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Add a doctor
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                name="fullName"
                required
                fullWidth
                id="fullName"
                label="Full Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                name="phno"
                fullWidth
                id="phno"
                label="Phone number"
                autoFocus
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            ADD TO DATABASE
          </Button>
        </Box>
      </Box>
    </Container>
  </>
}