import React from "react";
import {
  Grid,
  Box,
  Chip,
  Typography,
  Avatar,
  Divider,
  Paper,
  ClickAwayListener,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import CalendarEvent from "./CalendarEvent";
import CalendarMeeting from "./CalendarMeeting";
import AddEventDialog from "./AddEvent";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

}));

const CalendarDayView = ({ date, firstWeek, nextMonth, events,onHandleDayClick }) => {

  const classes = useStyles();
  const currentDay = moment(date);
  const onClickEvent = (event) => {    
    console.log('div clicked' + event);
    onHandleDayClick(date,event);
  }
  const sortedEvents = events.sort((x,y) => moment(x.date.start).isBefore(moment(y.date.start),'minute'));
  return (
    <>   
    <div
      style={{
        maxWidth: "%100",
        minWidth: "4rem",
        minHeight: "8rem",
        flexShrink: 1,
        flexGrow: 1,
        backgroundColor:(!moment(date).isSame(moment(),'day')) ?'#ffffff' :'#f0ece4',        
        border: "0.5px solid #dadce0",
      }}
      onClick={() =>onClickEvent(null)}
    >
     
      <Grid 
        container
        direction="column"
        justify="flex-start"
        
      >
        <Grid item xs={12}>
          {firstWeek ? (
            <Typography variant="subtitle2" align="center" style={{ borderBottom: "0.02rem solid #dadce0",backgroundColor:'#d6cab2' }}>
              <b>{currentDay.format("dd")}</b>
            </Typography>
          ) : null}
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={2} style={{ borderBottom: "0.02rem solid #dadce0",backgroundColor:'#f0ece4' }}>
            <Typography align="center" variant="subtitle2">
              {(nextMonth ? currentDay.format("MMM") + " " : "") +
                currentDay.date()}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}></Grid>

        <Grid
          container
          item
          xs
          direction="column"
          justify="flex-start"
          
          style={{ marginTop: "0.5rem" ,width:'140px',minWidth:'30px'}}
        >
          {sortedEvents
            ? sortedEvents.map((event, index) => {
                return event.type === "meeting" ? (
                  <CalendarMeeting event={event} onClickEvent={onClickEvent}></CalendarMeeting>
                ) : (
                  <CalendarEvent event={event} onClickEvent={onClickEvent}></CalendarEvent>
                );
                // <Grid item xs={12}>
                //   <Chip
                //     color={color}
                //     size="small"
                //     variant="outlined"
                //     onDelete={handleDelete}
                //     label={event.title}
                //     style={{minWidth:'1rem'}}
                //     avatar={<Avatar>{event.avatar.toUpperCase()}</Avatar>}
                //   />
                // </Grid>
              })
            : null}
        </Grid>
      </Grid>
    </div>
    </>
  );
};

export default CalendarDayView;
