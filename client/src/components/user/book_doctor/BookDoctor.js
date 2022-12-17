import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { InputLabel, MenuItem, Select } from "@mui/material";

import AvailableSlots from './AvailableSlots'

const theme = createTheme();

export default function BookDoctor() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const [doctor, setDoctor] = React.useState("Dr. Sreerag");

  const handleChange = (event) => {
    setDoctor(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <AssignmentIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Book an appointment
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="age"
                  label="Age"
                  name="age"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                {/* <FormControl fullWidth> */}
                <InputLabel id="demo-simple-select-label">
                Chose a doctor
                </InputLabel>
                <Select
                  labelId="doctor-select"
                  id="doctor-select"
                  value={doctor}
                  label="Doctor"
                  onChange={handleChange}
                >
                  <MenuItem value={"Dr. Sreerag"}>Dr. Sreerag</MenuItem>
                  <MenuItem value={"Dr. Advait"}>Dr. Advait</MenuItem>
                  <MenuItem value={"Dr. Anandu"}>Dr. Anandu</MenuItem>
                  <MenuItem value={"Dr. Alvin"}>Dr. Alvin</MenuItem>
                </Select>
                {/* </FormControl> */}
              </Grid> 
              <Grid item xs={12}>
                  <TextField
                    id="date"
                    label="Date of appointment"
                    type="date"
                    defaultValue="2022-12-17"
                    sx={{ width: 220 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Check for available slots
            </Button>
          </Box>
        </Box>
        <AvailableSlots/>
      </Container>
    </ThemeProvider>
  );
}
