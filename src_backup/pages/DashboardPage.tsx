import {
          BusinessCenterOutlined,
          EventAvailableOutlined,
          GroupOutlined,
          WorkOutline,
        } from "@mui/icons-material";
        import {
          Box,
          Chip,
          Grid,
          LinearProgress,
          Paper,
          Stack,
          Typography,
        } from "@mui/material";
        import type { ReactNode } from "react";
        
        type StatisticCardProps = {
          title: string;
          value: string;
          change: string;
          icon: ReactNode;
        };
        
        function StatisticCard({
          title,
          value,
          change,
          icon,
        }: StatisticCardProps) {
          return (
            <Paper
              elevation={0}
              sx={{
                p: 3,
                height: "100%",
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              <Stack direction="row" justifyContent="space-between">
                <Box>
                  <Typography color="text.secondary">{title}</Typography>
        
                  <Typography variant="h4" sx={{ mt: 1 }}>
                    {value}
                  </Typography>
                </Box>
        
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    display: "grid",
                    placeItems: "center",
                    borderRadius: 2,
                    backgroundColor: "primary.50",
                    color: "primary.main",
                  }}
                >
                  {icon}
                </Box>
              </Stack>
        
              <Typography
                variant="body2"
                color="success.main"
                sx={{ mt: 2 }}
              >
                {change}
              </Typography>
            </Paper>
          );
        }
        
        const candidates = [
          {
            name: "Sophia Miller",
            role: "Senior Java Developer",
            score: 94,
            status: "Interview",
          },
          {
            name: "Daniel Wilson",
            role: "React Developer",
            score: 89,
            status: "Review",
          },
          {
            name: "Emma Johnson",
            role: "Product Manager",
            score: 85,
            status: "New",
          },
        ];
        
        export default function DashboardPage() {
          return (
            <Stack spacing={3}>
              <Box>
                <Typography variant="h4">Recruitment Dashboard</Typography>
        
                <Typography color="text.secondary" sx={{ mt: 0.5 }}>
                  Monitor job openings, candidates and AI matching performance.
                </Typography>
              </Box>
        
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
                  <StatisticCard
                    title="Active Jobs"
                    value="12"
                    change="+2 this month"
                    icon={<WorkOutline />}
                  />
                </Grid>
        
                <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
                  <StatisticCard
                    title="Candidates"
                    value="148"
                    change="+18 this month"
                    icon={<GroupOutlined />}
                  />
                </Grid>
        
                <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
                  <StatisticCard
                    title="Applications"
                    value="327"
                    change="+42 this month"
                    icon={<BusinessCenterOutlined />}
                  />
                </Grid>
        
                <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
                  <StatisticCard
                    title="Interviews"
                    value="18"
                    change="+5 this week"
                    icon={<EventAvailableOutlined />}
                  />
                </Grid>
              </Grid>
        
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                <Typography variant="h5">Top candidate matches</Typography>
        
                <Typography color="text.secondary" sx={{ mt: 0.5, mb: 3 }}>
                  Candidates ranked by the current AI matching score.
                </Typography>
        
                <Stack spacing={3}>
                  {candidates.map((candidate) => (
                    <Box key={candidate.name}>
                      <Stack
                        direction={{
                          xs: "column",
                          sm: "row",
                        }}
                        justifyContent="space-between"
                        spacing={1}
                      >
                        <Box>
                          <Typography fontWeight={700}>
                            {candidate.name}
                          </Typography>
        
                          <Typography variant="body2" color="text.secondary">
                            {candidate.role}
                          </Typography>
                        </Box>
        
                        <Stack direction="row" spacing={1} alignItems="center">
                          <Chip
                            label={candidate.status}
                            size="small"
                            variant="outlined"
                          />
        
                          <Typography fontWeight={700}>
                            {candidate.score}%
                          </Typography>
                        </Stack>
                      </Stack>
        
                      <LinearProgress
                        variant="determinate"
                        value={candidate.score}
                        sx={{
                          mt: 1.5,
                          height: 8,
                          borderRadius: 10,
                        }}
                      />
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </Stack>
          );
        }