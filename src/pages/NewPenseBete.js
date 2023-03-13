import React from "react";
import axios from "axios";
import { Card, CardContent,InputLabel,MenuItem, Select, TextField, Typography } from '@mui/material';
import { Box, Container } from "@mui/system";
import { Link, Navigate } from "react-router-dom";
import {api} from "../lib/Api";

export default class NewPenseBete extends React.Component{
    state ={content: "", priority:"", confirmation: false};

    render() {
     return (
        <div>
        <a href="/">Home</a>
        <h1 style={{textAlign: "center"}}>New penseBete</h1>   
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            height: '50vh',
            padding: '5vh'
            }}> 
        {this.state.confirmation && <Navigate replace to="/penseBetes" />}
        <form onSubmit={e => this.submit(e)}>
          <Container>
            <div>
              <TextField  value={this.state.content} onChange={e => this.updateContent(e)} variant="outlined" />
            </div>
            <div>
              <InputLabel>Priorité</InputLabel>
              <Select value={this.state.priority} onChange={e => this.updatePriority(e)}>
                <MenuItem value={"Haute"}>Haute</MenuItem>
                <MenuItem value={"Moyenne"}>Moyenne</MenuItem>
                <MenuItem value={"Basse"}>Basse</MenuItem>
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

    updatePriority(event) {
        this.setState({...this.setState, priority: event.target.value, confirmation: false});
    }

    async submit(e) {
        e.preventDefault();
        await api.NewPenseBete(this.state.content, this.state.priority);
        this.setState({...this.state, confirmation: true});
    }
};