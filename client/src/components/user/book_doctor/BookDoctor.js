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
import { getDoctor } from "../../../apis";

import { useState, useEffect } from "react";

import AvailableSlots from "./AvailableSlots";

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

  const [doctors, setDoctors] = useState([]);
  const [doctor, setDoctor] = useState("");

  const handleChange = () => {};
  useEffect(() => {
    getDoctor()
      .then((res) => {
        console.log(res);
        setDoctors(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <ThemeProvider theme={theme}>
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
            <Grid container spacing={2} alignItems="center" gap={3}>
              <Grid xs={12} sm={6}>
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
              <Grid xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="age"
                  label="Age"
                  name="age"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid>
                <InputLabel id="demo-simple-select-label">
                  Choose a doctor
                </InputLabel>
                <Select
                  fullWidth
                  labelId="doctor-select"
                  id="doctor-select"
                  label="Doctor"
                  onChange={handleChange}
                >
                  {doctors.map((doctor) => {
                    return (
                      <MenuItem key={doctor._id} value={doctor.name}>
                        {doctor.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </Grid>
              <Grid xs={12}>
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
        <AvailableSlots />
      </Container>
    </ThemeProvider>
  );
}
