import {
          AssessmentOutlined,
          BusinessCenterOutlined,
          DashboardOutlined,
          GroupOutlined,
          LogoutOutlined,
          Menu as MenuIcon,
          WorkOutline,
        } from "@mui/icons-material";
        import {
          AppBar,
          Box,
          Divider,
          Drawer,
          IconButton,
          List,
          ListItemButton,
          ListItemIcon,
          ListItemText,
          Toolbar,
          Typography,
        } from "@mui/material";
        import { useState } from "react";
        import { Outlet, useLocation, useNavigate } from "react-router-dom";
        
        const drawerWidth = 250;
        
        const menuItems = [
          {
            label: "Dashboard",
            path: "/dashboard",
            icon: <DashboardOutlined />,
          },
          {
            label: "Job Openings",
            path: "/jobs",
            icon: <WorkOutline />,
          },
          {
            label: "Candidates",
            path: "/candidates",
            icon: <GroupOutlined />,
          },
          {
            label: "Applications",
            path: "/applications",
            icon: <BusinessCenterOutlined />,
          },
          {
            label: "Reports",
            path: "/reports",
            icon: <AssessmentOutlined />,
          },
        ];
        
        export default function DashboardLayout() {
          const navigate = useNavigate();
          const location = useLocation();
        
          const [mobileOpen, setMobileOpen] = useState(false);
        
          const drawerContent = (
            <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <Toolbar>
                <Typography variant="h5" color="primary" fontWeight={800}>
                  TalentAI
                </Typography>
              </Toolbar>
        
              <Divider />
        
              <List sx={{ px: 1.5, py: 2 }}>
                {menuItems.map((item) => (
                  <ListItemButton
                    key={item.path}
                    selected={location.pathname === item.path}
                    onClick={() => {
                      navigate(item.path);
                      setMobileOpen(false);
                    }}
                    sx={{
                      mb: 0.5,
                      borderRadius: 2,
                    }}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                ))}
              </List>
        
              <Box sx={{ mt: "auto", p: 1.5 }}>
                <Divider sx={{ mb: 1.5 }} />
        
                <ListItemButton
                  onClick={() => navigate("/login")}
                  sx={{ borderRadius: 2 }}
                >
                  <ListItemIcon>
                    <LogoutOutlined />
                  </ListItemIcon>
        
                  <ListItemText primary="Sign out" />
                </ListItemButton>
              </Box>
            </Box>
          );
        
          return (
            <Box sx={{ display: "flex", minHeight: "100vh" }}>
              <AppBar
                position="fixed"
                elevation={0}
                sx={{
                  width: {
                    md: `calc(100% - ${drawerWidth}px)`,
                  },
                  ml: {
                    md: `${drawerWidth}px`,
                  },
                  backgroundColor: "background.paper",
                  color: "text.primary",
                  borderBottom: "1px solid",
                  borderColor: "divider",
                }}
              >
                <Toolbar>
                  <IconButton
                    edge="start"
                    onClick={() => setMobileOpen(true)}
                    sx={{
                      mr: 2,
                      display: {
                        md: "none",
                      },
                    }}
                  >
                    <MenuIcon />
                  </IconButton>
        
                  <Typography fontWeight={600}>
                    AI Recruitment Platform
                  </Typography>
                </Toolbar>
              </AppBar>
        
              <Box
                component="nav"
                sx={{
                  width: {
                    md: drawerWidth,
                  },
                  flexShrink: {
                    md: 0,
                  },
                }}
              >
                <Drawer
                  variant="temporary"
                  open={mobileOpen}
                  onClose={() => setMobileOpen(false)}
                  ModalProps={{
                    keepMounted: true,
                  }}
                  sx={{
                    display: {
                      xs: "block",
                      md: "none",
                    },
                    "& .MuiDrawer-paper": {
                      width: drawerWidth,
                    },
                  }}
                >
                  {drawerContent}
                </Drawer>
        
                <Drawer
                  variant="permanent"
                  open
                  sx={{
                    display: {
                      xs: "none",
                      md: "block",
                    },
                    "& .MuiDrawer-paper": {
                      width: drawerWidth,
                      boxSizing: "border-box",
                    },
                  }}
                >
                  {drawerContent}
                </Drawer>
              </Box>
        
              <Box
                component="main"
                sx={{
                  flexGrow: 1,
                  width: {
                    md: `calc(100% - ${drawerWidth}px)`,
                  },
                  p: {
                    xs: 2,
                    sm: 3,
                  },
                }}
              >
                <Toolbar />
                <Outlet />
              </Box>
            </Box>
          );
        }