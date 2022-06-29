import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawers from './Drawer';
import DrawerRight from './DrawerRight';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: '#F5F5F5',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    marginRight: drawerWidth,
    background: "#F5F5F5",
    width: `calc(100% - 480px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  menuButton: {
    //marginRight: 36,
  },
  hide: {
    display: 'none',
  },
}));

export default function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
          </IconButton>
          <div style={{display: "flex", marginTop: 33}}>
            <Typography variant="h6" noWrap style={{color: "black", paddingRight: 100}}>
                Notes: The textarea in this page should be a rich text.
            </Typography>
            <div>
              <img src="/mode.png" alt="" width={60} height={25} style={{marginRight: 12}} />
              <img src="/logo.png" alt="" width={78} height={33} />
            </div>
        </div>
        </Toolbar>
      </AppBar>
          {/* Drawer goes here*/}
      <Drawers close={handleDrawerClose} open={open} />
      <DrawerRight />
    </>
  );
}
