import React, { useEffect } from "react";
import axios from "axios";
import { Button, Card, CardContent,InputLabel,MenuItem, Select, TextField, Typography } from '@mui/material';
import { Box, Container } from "@mui/system";
import { Link, Navigate } from "react-router-dom";
import {api} from "../lib/Api";

export default class Budget extends React.Component{
    state ={
        total: 0, 
        restant: 0,
        facture: 0,
        course: 0,
        autre: 0,
    };

    render() {
     return (
        <div>
        <a href="/">Home</a><br></br>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            height: '50vh',
            padding: '20vh'
            }}>
            <div style={{paddingInline: "2vh"}}>
                <h1 style={{textAlign: "center"}}>Budget du mois</h1>
                <TextField 
                label="Budget de départ"
                type="number"
                value={this.state.total}
                onChange={e => this.updateTotal(e)} variant="outlined">
                </TextField>
                <TextField 
                disabled 
                value={this.state.restant} 
                label="budget restant" variant="outlined"/>  
            </div>

            <div style={{paddingInline: "2vh"}}> 
                <h1>Facture</h1>
                <TextField 
                type="Number"
                value={this.state.facture}
                onChange={e => this.updateFacture(e)} variant="outlined">
                </TextField>
            </div>

            <div style={{paddingInline: "2vh"}}>
                <h1>Course</h1>
                <TextField 
                type="number"
                value={this.state.course}
                onChange={e => this.updateCourse(e)} variant="outlined">
                </TextField>
            </div>
            
            <div style={{paddingInline: "2vh"}}>
                <h1>Autre</h1>
                <TextField 
                type="number"
                value={this.state.autre}
                onChange={e => this.updateAutre(e)} variant="outlined">
                </TextField><br></br>
            </div>

        </div>
      </div>
    )
    }
    
    updateTotal(event) {
        this.setState({...this.setState, total: event.target.value});
        this.updateRestant();
        useEffect()
    }
    
    updateFacture(event) {
        this.setState({...this.setState, facture: event.target.value});
        this.updateRestant();
    }
    updateCourse(event) {
        this.setState({...this.setState, course: event.target.value});
        this.updateRestant();   
    }
    updateAutre(event) {
        this.setState({...this.setState, autre: event.target.value});
        this.updateRestant();   
    }
    updateRestant() {
        let result = this.state.total - this.state.facture - this.state.course - this.state.autre;
        this.setState({...this.setState, restant: result});
    }

};