import * as React from "react";
import FormControl from "@mui/material/FormControl";
import { Button, InputLabel, MenuItem, Select } from "@mui/material";
import { Container } from "@mui/system";
// import { bookAppointment } from "../../../apis";

export default function DocScheduleSlotsUser({ doctorId, date }) {
  const sched = [
    "9 AM - 10 AM",
    "10 AM - 11 AM",
    "11 AM - 12 AM",
    "1 PM - 2 PM",
    "2 PM - 3 PM",
    "3 PM - 4 PM",
    "4 PM - 5 PM"
  ];

  const [state, setState] = React.useState(sched);

  const handleChange = (event) => {
    // setState({
    //   ...state,
    //   [event.target.name]: event.target.checked,
    // });
    console.log(event.target.value)
    setState(event.target.value)
  };

  // const { gilad, jason, antoine } = state;

  return (
    <Container sx={{ display: "flex", justifyContent: "center", marginBottom:3}}>
      <FormControl sx={{ m: 1, minWidth: 120}} size="small">
        <InputLabel id="demo-select-small">Time Slots</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          // value={age}
          label="Time Slots"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>

          {state.map((time, index) => {
            console.log(time)
            return (
                  <MenuItem key={index} value={time}>{time}</MenuItem>
            );
          })}
        </Select>
        <Button
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={(e) => {
          e.preventDefault();
          let timeSlots = Object.keys(state).filter(
            (time) => state[time] === true
          );
          bookAppointment({
            doctorId,
            timeSlots,
            date,
          }).then((res) => {
            console.log(res);
            setState(sched);
          });
        }}
      >
        Book Appointment
      </Button>
      </FormControl>
      
    </Container>
  );
}
