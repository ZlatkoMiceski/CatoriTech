"use client";
import * as React from "react";
import { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import TextInputCustom from "./TextInputCustom";
import { Button, Modal } from "@mui/material";
import Link from "next/link";

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

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);
  const handleOpenRegister = () => setOpenRegister(true);
  const handleCloseRegister = () => setOpenRegister(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              onClick={handleDrawerOpen}
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
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: theme.palette.secondary.main,
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon sx={{ color: "white" }} />
              ) : (
                <ChevronRightIcon sx={{ color: "white" }} />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {["Promotions", "Casino", "Live Casino", "Contact"].map(
              (text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ color: "white" }}>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText
                      primary={
                          <Typography color="white">{text}</Typography>
                      }
                    />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
          <Divider />
        </Drawer>
        <Main open={open} style={{ position: "relative", minHeight: "100vh" }}>
          <DrawerHeader />
          {children}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "center",
              backgroundColor: theme.palette.secondary.main,
              width: "100%",
              padding: "20px",
              position: "absolute",
              bottom: 0,
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div>
                <div
                  style={{
                    width: "100%",
                    padding: "30x 20px",
                  }}
                >
                  <Typography variant="h5" color="white">
                    About Us
                  </Typography>
                  <Typography fontSize="12px" color="white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.{" "}
                  </Typography>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div style={{ width: "100%" }}>
                  <Typography variant="h6" color="white">
                    Dynamic Pages
                  </Typography>
                  <Link href="/contact">
                    <Typography fontSize="12px" color="white">
                      Contact us
                    </Typography>
                  </Link>
                  <Link href="/external">
                    <Typography fontSize="12px" color="white">
                      External Page
                    </Typography>
                  </Link>
                  <Link href="/grid">
                    <Typography fontSize="12px" color="white">
                      Grid Page
                    </Typography>
                  </Link>
                  <Link href="/faq">
                    <Typography fontSize="12px" color="white">
                    FAQ
                    </Typography>
                  </Link>
                </div>
                <div style={{ width: "100%" }}>
                  <Typography variant="h6" color="white">
                    Comminity
                  </Typography>
                  <Typography fontSize="12px" color="white">
                    Blog
                  </Typography>
                  <Typography fontSize="12px" color="white">
                    Forum
                  </Typography>
                  <Typography fontSize="12px" color="white">
                    Facebook
                  </Typography>
                  <Typography fontSize="12px" color="white">
                    Twitter
                  </Typography>
                  <Typography fontSize="12px" color="white">
                    Youtube
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </Main>
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
          <TextInputCustom labelText="email" />
          <TextInputCustom labelText="password" />
          <Button
            fullWidth
            variant="contained"
            style={{ backgroundColor: "#2f364a" }}
          >
            Login
          </Button>
          <Typography variant="h6" color="white">
            Forgot password?
          </Typography>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "10px" }}
          >
            <Typography variant="h6" color="#a2a4a6">
              Don`t have an accoun?`
            </Typography>
            <Typography variant="h6" color="white">
              Register an Account
            </Typography>
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
          <TextInputCustom labelText="firstname" />
          <TextInputCustom labelText="lastname" />
          <TextInputCustom labelText="email" />
          <TextInputCustom labelText="password" />
          <Button
            fullWidth
            variant="contained"
            style={{ backgroundColor: "#2f364a" }}
          >
            Register
          </Button>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "10px" }}
          >
            <Typography variant="h6" color="#a2a4a6">
              Already have an account?
            </Typography>
            <Typography variant="h6" color="white">
              Sign in
            </Typography>
          </div>
        </Box>
      </Modal>
    </>
  );
}
