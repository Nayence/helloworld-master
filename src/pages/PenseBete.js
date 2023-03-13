import { Container, Card, CardContent, Grid } from "@mui/material";
import React from "react";
import { api } from "../lib/Api";

export default class PenseBete extends React.Component {

  state = {penseBete: []};

  async componentDidMount() {
    const list = await api.getPenseBete();
    this.setState({ penseBete: list });
  }

  render() {
    let penseBetes = this.state.penseBete;
    return (
      <Container>
        <a href="/">Home</a>
        <h1 style={{textAlign: "center"}}>PenseBete</h1>
        <Grid container spacing={2}>
        {
          penseBetes.map(pb => {
            return (
              <Grid item xs={4} key={pb.id}>
                <Card>
                    <CardContent>{pb.content}</CardContent>
                    <CardContent>Priorité : {pb.priority}</CardContent>
                </Card>
              </Grid>
            )
          })
        }
        </Grid>
      </Container>
    );
  }
}