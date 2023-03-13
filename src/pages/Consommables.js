import { Container, Card, CardContent, Grid } from "@mui/material";
import React from "react";
import { api } from "../lib/Api";
import Consommable from "../components/Consommable";

export default class Consommables extends React.Component {

  state = {Consommables: []};

  async componentDidMount() {
    const list = await api.getConsommables();
    this.setState({ Consommables: list });
  }

  render() {
    let consommables = this.state.Consommables;
    return (
      <Container>
        <a href="/">Home</a>
        <h1 style={{textAlign: "center"}}>Consommables</h1>
        <h2>Film</h2>
        <Grid container spacing={2}>
        {
          consommables.map(conso => {
            if( conso.type=="Film") {
            return (
              <Grid item xs={4} key={conso.id}>
                <Consommable consommables={conso}/>
              </Grid>
            )
            }
          })
        }
        </Grid><br></br>
        <h2>Livre</h2>
        <Grid container spacing={2}>
        {
          consommables.map(conso => {
            if (conso.type=="Livre") {
            return (
              <Grid item xs={4} key={conso.id}>
                <Consommable consommables={conso}/>
              </Grid>
            )
            }
          })
        }
        </Grid><br></br>
        <h2>Autre</h2>
        <Grid container spacing={2}>
        {
          consommables.map(conso => {
            if (conso.type=="Autre") {
            return (
              <Grid item xs={4} key={conso.id}>
                <Consommable consommables={conso}/>
              </Grid>
            )
            }
          })
        }
        </Grid>
      </Container>
    );
  }
}