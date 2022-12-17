import React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { Button } from "@mui/material";

export default function AvailableSlots() {
  const [open, setOpen] = React.useState({id:"", state:false});


  let slots = ["9 AM - 10 AM " , "10 AM - 11 AM " , "11 AM - 12 PM " , "1 PM - 2 PM " , "2 PM - 3 PM " , "3 PM - 4 PM " , "4 PM - 5 PM " ];
  return (
      <>
      {slots.map((slot) => {
        return (
          <>
            <ListItem onClick={()=>{
              setOpen({id:slot, state:!open.state})
            }} key={slot}>
              <ListItemIcon>
                <AccessTimeFilledIcon />
              </ListItemIcon>
              <ListItemText inset primary={slot} />
              {open.state && open.id===slot ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem>
                  <Button variant="outlined" color="error" fullWidth>
                    CLICK TO CONFIRM SLOT
                  </Button>
                </ListItem>
              </List>
            </Collapse>
          </>
        );
      })}
    </>
  );
}
