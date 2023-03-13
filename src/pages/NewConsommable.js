import React from "react";
import { InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Container } from "@mui/system";
import { Navigate } from "react-router-dom";
import { api } from "../lib/Api";

export default class NewConsommable extends React.Component{
    state ={content: "", type:"", confirmation: false};

    render() {
     return (
        <div>
        <a href="/">Home</a>
        <h1 style={{textAlign: "center"}}>New Consommable</h1>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            height: '50vh',
            padding: '5vh'
            }}>
        {this.state.confirmation && <Navigate replace to="/consommables" />}
        <form onSubmit={e => this.submit(e)}>
          <Container>
            <div>
              <TextField  value={this.state.content} onChange={e => this.updateContent(e)} variant="outlined" />
            </div>
            <div>
              <InputLabel>Type Consommable</InputLabel>
              <Select value={this.state.type} onChange={e => this.updateType(e)}>
                <MenuItem value={"Livre"}>Livre</MenuItem>
                <MenuItem value={"Film"}>Film</MenuItem>
                <MenuItem value={"Autre"}>Autre</MenuItem>
              </Select>
            </div>
            <div>
              <button type="submit">Créer</button>
            </div>
          </Container>
        </form>
        </div>
      </div>
    )
    }

    updateContent(event) {
        this.setState({...this.setState, content: event.target.value, confirmation: false});
    }

    updateType(event) {
        this.setState({...this.setState, type: event.target.value, confirmation: false});
    }

    async submit(e) {
        e.preventDefault();
        await api.NewConsommable(this.state.content, this.state.type);
        this.setState({...this.state, confirmation: true});
    }
};