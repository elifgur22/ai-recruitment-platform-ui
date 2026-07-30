import {
          Alert,
          Box,
          Button,
          Paper,
          Stack,
          TextField,
          Typography,
        } from "@mui/material";
        import { useState, type FormEvent } from "react";
        import { useNavigate } from "react-router-dom";
        
        export default function LoginPage() {
          const navigate = useNavigate();
        
          const [email, setEmail] = useState("");
          const [password, setPassword] = useState("");
          const [error, setError] = useState<string | null>(null);
        
          const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
        
            if (!email.trim() || !password.trim()) {
              setError("Email and password are required.");
              return;
            }
        
            setError(null);
        
            // Backend bağlantısını daha sonra ekleyeceğiz.
            navigate("/dashboard");
          };
        
          return (
            <Box
              sx={{
                minHeight: "100vh",
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "1fr 1fr",
                },
              }}
            >
              <Box
                sx={{
                  display: {
                    xs: "none",
                    md: "flex",
                  },
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: 8,
                  color: "white",
                  background:
                    "linear-gradient(135deg, #312e81 0%, #5b4bdb 55%, #00a896 100%)",
                }}
              >
                <Typography variant="h2" fontWeight={800}>
                  TalentAI
                </Typography>
        
                <Typography
                  variant="h5"
                  sx={{
                    maxWidth: 520,
                    mt: 3,
                    lineHeight: 1.5,
                  }}
                >
                  Find the right talent with intelligent candidate matching.
                </Typography>
        
                <Typography sx={{ mt: 2, maxWidth: 520, opacity: 0.85 }}>
                  Manage job postings, applications, candidate scores and interviews
                  from one recruitment platform.
                </Typography>
              </Box>
        
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 3,
                  backgroundColor: "background.default",
                }}
              >
                <Paper
                  component="form"
                  onSubmit={handleSubmit}
                  elevation={0}
                  sx={{
                    width: "100%",
                    maxWidth: 440,
                    padding: {
                      xs: 3,
                      sm: 5,
                    },
                    border: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <Stack spacing={3}>
                    <Box>
                      <Typography variant="h4">Welcome back</Typography>
        
                      <Typography color="text.secondary" sx={{ mt: 1 }}>
                        Sign in to your recruitment workspace.
                      </Typography>
                    </Box>
        
                    {error && <Alert severity="error">{error}</Alert>}
        
                    <TextField
                      label="Email address"
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      autoComplete="email"
                      fullWidth
                    />
        
                    <TextField
                      label="Password"
                      type="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      autoComplete="current-password"
                      fullWidth
                    />
        
                    <Button type="submit" variant="contained" size="large">
                      Sign in
                    </Button>
        
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      textAlign="center"
                    >
                      Demo mode: enter any email and password.
                    </Typography>
                  </Stack>
                </Paper>
              </Box>
            </Box>
          );
        }