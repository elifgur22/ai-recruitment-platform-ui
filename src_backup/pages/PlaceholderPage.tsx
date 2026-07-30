import { Paper, Typography } from "@mui/material";

type PlaceholderPageProps = {
  title: string;
};

export default function PlaceholderPage({
  title,
}: PlaceholderPageProps) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <Typography variant="h4">{title}</Typography>

      <Typography color="text.secondary" sx={{ mt: 1 }}>
        This module will be implemented in the next sprint.
      </Typography>
    </Paper>
  );
}