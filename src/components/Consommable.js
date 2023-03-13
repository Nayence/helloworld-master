import { Button, Card, CardContent, Typography, Checkbox } from "@mui/material";

export default function Consommable(props) {
  return (
    <Card>
      <CardContent>
        <Typography variant="body1">{ props.consommables.content }</Typography>
        <Checkbox/>
        <Button variant="outlined">Delete</Button>
      </CardContent>
    </Card>
  )
}