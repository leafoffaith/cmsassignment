import { Card, CardMedia, CardContent, Typography } from "@mui/material";

function CardComponent() {
  return (
    <Card sx={{ maxWidth: "25rem", margin: "3rem auto" }}>
      <CardMedia
        component="img"
        height="200"
        image="https://loremflickr.com/400/200/tokyo"
        alt="A Random picture found with the keyword Tokyo"
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          Card Title
        </Typography>
        <Typography variant="body1">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardComponent;
