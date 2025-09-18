import { Button, Card, CardContent, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link to={`/exercise/${exercise.id}`} style={{ textDecoration: "none" }}>
      <Card
        sx={{
          width: "100%",                // let the Grid column control width
          height: { xs: 160, sm: 240, md: 280 },
          borderRadius: 2,
          boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
          transition: "transform 0.25s, box-shadow 0.25s",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0 8px 30px rgba(64,0,0,0.35)",
          },
          bgcolor: "#2B0A0A",
          color: "#F5E1E1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          boxSizing: "border-box",
          p: 2,
        }}
      >
        <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "700",
              textTransform: "capitalize",
              fontSize: { xs: "1rem", sm: "1.05rem", md: "1.15rem" },
            }}
          >
            {exercise.name}
          </Typography>
          <Stack direction="row" mt="30px" justifyContent="center">
            <Button sx={{ ml: '21px', color: '#86330dff', background: '#fff', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                {exercise.bodyPart}
            </Button>
            <Button sx={{ ml: '21px', color: '#86330dff', background: '#fff', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
            {exercise.target}
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ExerciseCard;
