import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  TextField,
  ButtonGroup,
  DialogContentText,
  Container,
  Grid,
} from "@material-ui/core";
import moment from "moment";

const AddEventDialog = ({ state, setOpen, date, dateAvailable,event,eventHandlers }) => {
  const [meeting, setMeeting] = React.useState(true);
  const [note,setNote] = React.useState("note");
  const [title,setTitle] = React.useState('title');
  const [dateStart,setDateStart] = React.useState('07:30');
  const [dateEnd,setDateEnd] = React.useState('07:30');

  const handleClose = () => {
    setTitle('');
    setNote('');
    setDateStart('07:30');
    setDateEnd('07:30');
    setOpen(false);
    
  };

  const handleEntering = () => {
    setMeeting(event && event.type ? event.type : 'meeting')
    setTitle(event && event.title ? event.title : " " );
    setNote(event && event.note ? event.note : " " );    
    setDateStart(event  ? moment(event.date.start).format('HH:mm') : "07:30" );    
    setDateEnd(event  ? moment(event.date.end).format('HH:mm') : "07:30" );    
  };

  const handleNote = (event) => {
    setNote(event.target.value)
  }

  const handleStartHour = (event) => {
    setDateStart(event.target.value)
  }

  const handleEndHour = (event) => {
    setDateEnd(event.target.value)
  }

  const handleTitle = (event) => {
    setTitle(event.target.value)
  }
  const handleDelete = () => {
    if(event){
      eventHandlers.delete(event);  
    }
    setOpen(false);
  }
  const handleSave = () => {    
    let newEvent = {
      title: title,
      note:note,
      date:{
        start:moment(date).add(parseInt(dateStart.split(':')[0]),'hour').add(parseInt(dateStart.split(':')[1]),'minute').toISOString(),
        end:moment(date).add(parseInt(dateEnd.split(':')[0]),'hour').add(parseInt(dateEnd.split(':')[1]),'minute').toISOString()
      },
      type:meeting == 'meeting' ? 'meeting' : 'note'
    }
    
  console.log(newEvent);
    if(event){
      console.log('update event');
      newEvent.id = event.id;
      eventHandlers.update(newEvent);  
    }
    else {
      console.log('save event');
      eventHandlers.save(newEvent);  
    }
    setOpen(false);
  }
  return (
    
      <Dialog
        id='Add-Event'
        open={state}
        onOpen
        onClose={handleClose}
        onEntering={handleEntering}
        maxWidth="xs"
        fullWidth
        scroll="paper"
        aria-labelledby="form-dialog-title"
      >
        <DialogContent style={{ minHeight: "400px", minWidth: "300px" }}>
          <Grid container direction="column" spacing={4}>
            <Grid item xs>
              <TextField id="standard-basic" label="Add Title" fullWidth  value={title} onChange={handleTitle}/>
            </Grid>
            <Grid item xs>
              <TextField
                id="standard-basic"
                variant="outlined"
                label="Note"
                rows={25}
                fullWidth
                value={note}
                onChange={handleNote}
              >                
              </TextField>
            </Grid>
            <Grid item xs>
              <ButtonGroup color="primary">
                <Button
                  variant={(event ? event.type == 'meeting' : meeting)  ? "contained" : "outlined"}
                  onClick={() => setMeeting(true)}
                >
                  Meeting
                </Button>
                <Button
                  variant={(event ? event.type == 'note' : !meeting) ? "contained" : "outlined"}
                  onClick={() => setMeeting(false)}
                >
                  Note
                </Button>
              </ButtonGroup>
            </Grid>
            
              <Grid item xs>
                {dateAvailable ? <TextField
                  id="date"
                  label="Day"
                  type="date"
                  defaultValue={date}
                  InputLabelProps={{
                    shrink: true,
                  }}
                /> : 
                <TextField
                  id="date"
                  label="Day"
                  type="date"
                  disabled
                  defaultValue={date}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />}
              </Grid>            

            <Grid item container xs spacing={2}>
              <Grid item xs={6}>
                <TextField
                  id="time"
                  label="Start Date"
                  variant="outlined"
                  type="time"
                  fullWidth
                  defaultValue='07:30'
                  onChange={handleStartHour}
                  value={dateStart}
                  // defaultValue="07:30"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="time"
                  label="End Date"
                  variant="outlined"
                  type="time"
                  fullWidth
                  defaultValue='07:30'
                  value={dateEnd}
                  onChange={handleEndHour}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
        { event ? <Button onClick={handleDelete} color="primary">
            Delete
          </Button> : null}
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
  );
};

export default AddEventDialog;
