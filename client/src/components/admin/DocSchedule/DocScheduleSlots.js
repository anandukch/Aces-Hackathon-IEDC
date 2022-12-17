import * as React from "react";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import { Container } from "@mui/system";
import { alignProperty } from "@mui/material/styles/cssUtils";

export default function DocScheduleSlots() {
  const sched = {
    "9 AM - 10 AM": false,
    "10 AM - 11 AM": false,
    "11 AM - 12 AM": false,
    "1 PM - 2 PM": false,
    "2 PM - 3 PM": false,
    "3 PM - 4 PM": false,
    "4 PM - 5 PM": false,
  };

  const [state, setState] = React.useState(sched);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  // const { gilad, jason, antoine } = state;

  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">
          Chose from the avaialable slots
        </FormLabel>
        <FormGroup>
          {Object.keys(state).map((time, index) => {
            return (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    checked={state[time]}
                    onChange={handleChange}
                    name={time}
                  />
                }
                label={time}
              />
            );
          })}
        </FormGroup>
        <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Save
        </Button>
      </FormControl>
    </Container>
  );
}
