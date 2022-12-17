import { Button, Grid, TextField } from "@mui/material";
import { Box, Stack } from "@mui/system";
import AppointmentTable from "./AppointmentTable";

export default function AppointmentDetails() {
  return (
    <>
      <Grid
        container
        spacing={0}
        marginTop={2}
        display="flex"
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={3}
        // style={{ minHeight: "100vh" }}
      >
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
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            Print the Appointment Details
          </Button>
        </Grid>
      </Grid>
      <AppointmentTable/>
    </>
  );
}
