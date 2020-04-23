import React from "react";

import "./App.css";
import { Container } from "@material-ui/core";
import Cover from "./Components/Cover";

const events = [
  {
    id: "b6dd8a32-e899-4ee7-ac2f-0d579d527c40",
    avatar: "A",
    title: "meeting for virtual tour",
    type: "meeting",
    note: "a meeting",
    date: {
      start: "2020-04-08T04:13:56+03:00",
      end: "2020-04-08T12:13:56+03:00",
    },
  },
  {
    id: "31b03555-6152-4b17-b81f-667b8c3838f0",
    avatar: "B",
    title: "Pay rent for current month",
    type: "note",
    note: "a reminder",
    date: {
      start: "2020-04-27T10:13:56+03:00",
      end: "2020-04-27T15:13:56+03:00",
    },
  },
  {
    id: "1f374474-c093-4451-accc-d5e0bebb3ad3",
    avatar: "B",
    title: "22 2 ",
    type: "note",
    note: "a reminder",
    date: {
      start: "2020-04-27T16:13:56+03:00",
      end: "2020-04-27T17:13:56+03:00",
    },
  },
];

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Cover events={events}></Cover>
      </Container>
    </div>
  );
}

export default App;
