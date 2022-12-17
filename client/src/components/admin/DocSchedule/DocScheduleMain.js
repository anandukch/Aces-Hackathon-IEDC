import { Button, Grid, MenuItem, Select, InputLabel, TextField } from "@mui/material";
import DocScheduleSlots from "./DocScheduleSlots";
import NavBar_Admin from "../NavBar_admin";
import { useEffect, useState } from "react";
import { getDoctor } from "../../../apis";
import { Stack } from "@mui/system";

export default function DocScheduleMain() {
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
    <>
      <NavBar_Admin />
      <Grid
        container
        spacing={0}
        marginTop={2}
        display="flex"
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={3}
        marginBottom={3}
        // style={{ minHeight: "100vh" }}
      >
        <Grid>
          <InputLabel id="demo-simple-select-label">Choose a doctor</InputLabel>
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
        <Grid>
          <Stack component="form" noValidate spacing={3}>
            <TextField
              id="date"
              label="Date:"
              type="date"
              defaultValue={new Date().toJSON().slice(0, 10)}
              sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Stack>
        </Grid>
        <Grid>
        </Grid>
      </Grid>
      <DocScheduleSlots />
    </>
  );
}
