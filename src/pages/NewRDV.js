import React, {useState} from "react";
import { InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Container } from "@mui/system";
import { Navigate } from "react-router-dom";
import { api } from "../lib/Api";

export default class NewRDV extends React.Component{
    
    state ={
        title: "", 
        com:"", 
        date: new Date(''), 
        confirmation: false
    };

    
    render() {
     return (
        <div>
        <a href="/">Home</a>    
        <h1>Nouveau Rendez-vous</h1>
        {this.state.confirmation && <Navigate replace to="/penseBetes" />}
        <form onSubmit={e => this.submit(e)}>
          <Container>
            <div>
              <InputLabel>Titre du RDV</InputLabel>
              <TextField  value={this.state.title} onChange={e => this.updateTitle(e)} variant="outlined" />
            </div>
            <div>
              <InputLabel>Documents à ramener, etc.</InputLabel>
              <TextField  value={this.state.com} onChange={e => this.updateCom(e)} variant="outlined" />
            </div>
            <div>
              <InputLabel>Date et Heure</InputLabel>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticDateTimePicker 
                value={this.state.date} 
                onChange={e => this.updateTime(e)}/>
              </LocalizationProvider>
            </div>
            <div>
              <button type="submit">Créer</button>
            </div>
          </Container>
        </form>
      </div>
    )
    }

    updateTitle(event) {
        this.setState({...this.setState, title: event.target.value, confirmation: false});
    }

    updateCom(event) {
        this.setState({...this.setState, com: event.target.value, confirmation: false});
    }

    updateTime(event) {
        this.setState({...this.setState, date: event.target.value, confirmation: false});
    }
    async submit(e) {
        e.preventDefault();
        await api.NewRDV(this.state.title, this.state.com, this.state.date.toLocaleDateString());
        this.setState({...this.state, confirmation: true});
    }
};