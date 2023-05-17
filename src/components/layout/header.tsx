import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import KHiveLogo from "../../Assets/mainLogo";
import KHiveLogo1 from "../../Assets/mainLogo2";
import Khivelogo3 from "../../Assets/mainlogo3";
// @ts-ignore
import { usePath, A, navigate } from "hookrouter";
import { makeStyles } from "@mui/styles";

const drawerWidth = 240;
const navItems = [
  { label: "Home", path: "/" },
  { label: "About us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Careers", path: "/careers" },
];

const useStyles = makeStyles({
  active: {
    textDecoration: "underline",
    color: "#06B6D4",
    marginRight: "16px",
  },
  notActive: {
    textDecoration: "none",
    color: "#fff",
    marginRight: "16px",
  },
});
const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedNav, setSelectedNav] = React.useState("/");
  const currentPath = usePath();

  React.useEffect(() => {
    if (currentPath === "/") {
      setSelectedNav("Home");
    } else if (currentPath === "/contact-us") {
      setSelectedNav("Contact Us");
    } else {
      setSelectedNav("Services");
    }
  }, [currentPath]);

  const handleButtonClick = () => {
    navigate("/contact-us");
  };

  const classes = useStyles();

  React.useEffect(() => {
    // Update the selected nav item based on the current currentPath
    const navItem = navItems.find((item) => item.path === currentPath);
    if (navItem) {
      setSelectedNav(navItem.label);
    }
  }, [currentPath]);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleNavClick = (label: any, path: any) => {
    setSelectedNav(label);
    setMobileOpen(false);
    navigate(path);
    handleDrawerToggle();
    // Close the mobile drawer after clicking a nav item
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", backgroundColor: "transparent" }}
    >
      <ListItem onClick={() => handleNavClick("Home", "/")}>
        <KHiveLogo1 />
      </ListItem>

      <List style={{ padding: 0 }}>
        {navItems.map((item) => (
          <React.Fragment key={item.label}>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton
                sx={{ textAlign: "center" }}
                onClick={() => handleNavClick(item.label, item.path)}
                className={
                  selectedNav === item.label
                    ? classes.active
                    : classes.notActive
                }
              >
                <ListItemText primary={item.label} />
                {/* <ListItemText className={(selectedNav === item.label && item.path !== '/contact-us') ? 'active' : 'notActive'} primary={item.label} /> */}
              </ListItemButton>
            </ListItem>
          </React.Fragment>
        ))}
        <Divider />
        <A href="/contact-us" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            sx={{
              borderRadius: "6px",
              width: "90%",
              textTransform: "none",
              backgroundColor: "#06B6D4",
              alignSelf: "stretch",
              margin: "16px",
              "&:hover": {
                backgroundColor: "#06B6D4",
                borderColor: "#06B6D4",
              },
            }}
          >
            Request&nbsp;a&nbsp;Quote
          </Button>
        </A>
        <Divider />
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar
          style={{
            justifyContent: "space-between",
            backgroundColor: selectedNav === "Home" ? "#111827" : "#FFFFFF",
            
          }}
        >
          {selectedNav === "Home" ? (
            <A href="/" style={{ textDecoration: "none",display:"flex" }}>
              <KHiveLogo  />
            </A>
          ) : (
            <A href="/" style={{ textDecoration: "none",display:"flex" }}>
              <Khivelogo3 />
            </A>
          )}

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navItems.map((item) => (
              <A
                key={item.label}
                href={item.path}
                style={{ marginRight: "16px", textDecoration: "none" }}
                className={
                  currentPath === item.path ? classes.active : classes.notActive
                }
                onClick={() => setSelectedNav(item.label)}
              >
                <Button
                  disableRipple={true}
               
                  sx={{
                     textTransform: "none" , 
                    color:
                      selectedNav === item.label
                        ? "#06B6D4"
                        : selectedNav !== "Home"
                        ? "#1E293B"
                        : "#fff",
                        borderRadius:0,
                        // textDecoration: selectedNav === item.label ? 'underline' : 'none',
                        fontWeight: selectedNav === item.label ? 'bold' : 'normal',
                        paddingBottom: selectedNav === item.label ? '4px' : '0',
                        borderBottom: selectedNav === item.label ? '2px solid #06B6D4' : 'none',
                        '&:hover': {
                           color: '#06B6D4',
                           backgroundColor:"unset"
                         },
                        
                  }}
                >
                  {" "}
                  {item.label}
                </Button>
              </A>
            ))}
          </Box>

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {/* <A href="/contact-us"   > */}
            <Button
              variant="contained"
              onClick={handleButtonClick}
              sx={{
                backgroundColor:"#06B6D4",
                borderColor: selectedNav !== "Home" ? "#06B6D4" : "#C22522",
                color: selectedNav !== "Home" ? "#fff" : "#FFF",
                textTransform: "none",
                borderRadius: "6px",
                mr: 2,
                textDecoration: "none !important",
                "&:hover": {
                  backgroundColor: "#06B6D4",
                  borderColor: "#06B6D4",
                  color: selectedNav !== "Home" ? "#FFF" : "#FFF",
                },
              }}
            >
              Get&nbsp;In&nbsp;Touch
            </Button>
            {/* </A> */}
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon sx={{color:selectedNav !== "Home" ? "#1E293B" : "#FFF"}}/>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer   
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              right: 0,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Header;
