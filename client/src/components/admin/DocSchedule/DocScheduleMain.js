import { Button, Grid, MenuItem, Select, InputLabel } from "@mui/material";
import DocScheduleSlots from "./DocScheduleSlots";
import NavBar_Admin from "../NavBar_admin";
import { useEffect, useState } from "react";
import { getDoctor } from "../../../apis";

export default function DocScheduleMain() {
  const [doctor, setDoctor] = useState();
  const handleChange = () => {};
  useEffect(() => {
    getDoctor()
      .then((res) => {
        console.log(res);
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
        marginBottom={2}
        // style={{ minHeight: "100vh" }}
      >
        <Grid item xs={12}>
          <InputLabel id="demo-simple-select-label">Chose a doctor</InputLabel>
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
        </Grid>
        <Grid>
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            Print the Appointment Details
          </Button>
        </Grid>
      </Grid>
      <DocScheduleSlots />
    </>
  );
}
