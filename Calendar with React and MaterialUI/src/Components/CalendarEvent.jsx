import React from "react";
import { Box, Paper, Grid, Typography } from "@material-ui/core";
import EventIcon from "@material-ui/icons/Event";
import moment from "moment";

const CalendarEvent = ({ event, onClickEvent }) => {
  const title = event.title
    ? event.title.length > 10
      ? event.title.substring(0, 10) + "..."
      : event.title
    : "no title";
  const onClickMeeting = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClickEvent(event);
  };
  return (
    <div
      style={{ flexGrow: 1, flexShrink: 1, flexBasis: "0%",marginBottom:'4px'}}
      onClick={onClickMeeting}
    >
      <Paper
        style={{
          backgroundColor: "#8cf58c",
        }}
      >
        <Grid
          item
          container
          alignContent="flex-start"
          alignItems="stretch"
          direction="row"
        >
          <Grid item xs={2} style={{ marginTop: "4px" }}>
            <EventIcon fontSize="small"></EventIcon>
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
      </Paper>
    </div>
  );
};

export default CalendarEvent;
