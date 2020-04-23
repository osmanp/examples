import { Grid } from "@material-ui/core";
import moment from 'moment';
import React from "react";
import CalendarDayView from './CalendarDayView';

const CalendarWeekView = ({date,firstWeek,events,onHandleDayClick}) => {
    
    return (
        <Grid item container 
        alignItems="baseline"
        direction="row"
        justify="flex-start"
        >
            {Array.from(Array(7).keys()).map((element,index) => {
                const nextMonth = moment(date).month() < moment(date).add('day',element).month();
                const dailyEvents = events.filter(e => moment(e.date.start).isSame(moment(date).add('day',element),'day'));                
                return <CalendarDayView date={moment(date).add('day',element)} events={dailyEvents} firstWeek={firstWeek} nextMonth={nextMonth}
                onHandleDayClick={onHandleDayClick}
                ></CalendarDayView>
            })}
        </Grid>
    )
}

export default CalendarWeekView;