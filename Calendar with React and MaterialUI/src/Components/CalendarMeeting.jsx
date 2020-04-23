import React from "react";
import { Paper, Grid,Box, Typography } from "@material-ui/core";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import moment from "moment";

const CalendarMeeting = ({ event,onClickEvent }) => {
  const title = event.title
    ? event.title.length > 15
      ? event.title.substring(0, 15) + "..."
      : event.title
    : "no title";
  const onClickMeeting = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClickEvent(event);
  }
  return (
    <div style={{flexGrow:1,flexShrink:1,flexBasis:'0%',width:'%15',marginBottom:'4px'}} onClick={onClickMeeting}>
    <Paper style={{ backgroundColor: "#95ddf5" }}>
      <Grid item xs>
        <Grid
          container
          item
          alignItems="center"
          direction="row"
          justify="center"
          alignContent="center"
        >
          <Grid item xs={2} style={{ marginTop: "4px" }}>
            <MeetingRoomIcon fontSize="small"></MeetingRoomIcon>
          </Grid>
          <Grid item xs  style={{}}>
           <Typography style={{
             fontSize:'14px',
             fontFamily:'Arial',
             textIndent:'2',
             alignItems:'center',
             justifyContent:'center',
             marginTop:'4px',
             marginLeft:'8px'
           }}>
           {moment(event.date.start).format('HH a') + ' - ' + moment(event.date.end).format('HH a')}
           </Typography>
           
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    </div>
  );
};

export default CalendarMeeting;
