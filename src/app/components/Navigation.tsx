"use client";
import Image from "next/image";
import styles from "./page.module.css";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Modal,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useState } from "react";
import TextInputCustom from "./TextInputCustom";
import { useTheme } from "@emotion/react";

const drawerWidth = 240;

const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "15px",
  backgroundColor: "#252c40",
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  //bgcolor: "background.paper",
  //border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};



const Navigation = ({ children }: any) => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);
  const handleOpenRegister = () => setOpenRegister(true);
  const handleCloseRegister = () => setOpenRegister(false);
  
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit" onClick={handleOpenLogin}>
              Login
            </Button>
            <Button color="inherit" onClick={handleOpenRegister}>
              Register
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              {["Inbox", "Starred", "Send email", "Drafts"].map(
                (text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                )
              )}
            </List>
            <Divider />
            <List>
              {["All mail", "Trash", "Spam"].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>


        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          {children}
        </Box>
      </Box>
      <Modal
        open={openLogin}
        onClose={handleCloseLogin}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            color="white"
          >
            Login
          </Typography>
          <TextInputCustom labelText="email"/>
          <TextInputCustom labelText="password"/>
          <Button fullWidth variant="contained" style={{ backgroundColor: "#2f364a"}}>Login</Button>
          <Typography variant="h6"
            color="white">Forgot password?</Typography>
          <div style={{display: "flex", justifyContent: "center", gap: "10px"}}>
          <Typography
            variant="h6"
            color="#a2a4a6"
          >
            Don`t have an accoun?`
          </Typography>
          <Typography variant="h6" color="white">Register an Account</Typography>
          </div>
        </Box>
      </Modal>
      <Modal
        open={openRegister}
        onClose={handleCloseRegister}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            color="white"
          >
            Register
          </Typography>
          <TextInputCustom labelText="firstname"/>
          <TextInputCustom labelText="lastname"/>
          <TextInputCustom labelText="email"/>
          <TextInputCustom labelText="password"/>
          <Button fullWidth variant="contained" style={{ backgroundColor: "#2f364a"}}>Register</Button>
          <div style={{display: "flex", justifyContent: "center", gap: "10px"}}>
          <Typography
            variant="h6"
            color="#a2a4a6"
          >
            Already have an account?
          </Typography>
          <Typography variant="h6" color="white">Sign in</Typography>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Navigation;
