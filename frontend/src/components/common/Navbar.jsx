import { AppBar, Toolbar, Typography, Button } from "@mui/material";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6">Hacker News</Typography>

        <div>
          <Button color="inherit" component={Link} to="/story">
            Stories
          </Button>

          <Button color="inherit" component={Link} to="/bookmarks">
            Bookmarks
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
