import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ChatIcon from '@material-ui/icons/Chat';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import GavelIcon from '@material-ui/icons/Gavel';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import NoteIcon from '@material-ui/icons/Note';
import StarsIcon from '@material-ui/icons/Stars';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import {Link} from 'react-router-dom';



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
      },
      drawerOpen: {
        width: drawerWidth,
        background: "#FFFFFF",
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      text: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '0.5px',
        color: 'rgba(0, 0, 0, 0.6)',
      },
      drawerClose: {
        background: "#FFFFFF",
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9) + 1,
        },
      },
      text: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '0.5px',
        color: 'rgba(0, 0, 0, 0.6)',
      },
      hover: {
        '&:hover': {
          background: '#F2E7FE',
          borderRadius: '0px 100px 100px 0px',
          color: "red",
      },
    },
   
}));

export default function DrawerMenu({close, open}) {
  const classes = useStyles();

  return (
    <Drawer
    variant="permanent"
    className={clsx(classes.drawer, {
      [classes.drawerOpen]: open,
      [classes.drawerClose]: !open,
    })}
    classes={{
      paper: clsx({
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      }),
    }}
  >
    <div style={{display: "flex", alignItems: "center", paddingLeft: 8, marginTop: 33}}>
      <img src="/avatar.png" alt='' />
    </div>
    <List>
    <div style={{paddingLeft: 8}}>
        <div className={classes.text}>
          Eze Josehp Ajalli
        </div>
        <div style={{display: "flex"}}>
            <div className={classes.text}>
              eze.ajalli.joseph@gmail.com
            </div>
            <ArrowDropDownIcon />
        </div>

        <Divider />

        <div className={classes.text} style={{marginTop: 18, marginBottom: 18, color: 'rgba(0, 0, 0, 0.38)', fontSize: 10}}>
          Main
        </div>
    </div>

      <ListItem component={Link} to="#" className={classes.hover}>
          <ListItemIcon className={classes.hoverBotton}><DashboardIcon  /></ListItemIcon>
          <div className={classes.text}>Home</div>
      </ListItem>

      <ListItem component={Link} to="#" className={classes.hover}>
          <ListItemIcon><PeopleIcon /></ListItemIcon>
          <div className={classes.text}>Profile</div>
      </ListItem>
      <ListItem component={Link} to="#" className={classes.hover}>
          <ListItemIcon><DateRangeIcon /></ListItemIcon>
          <div className={classes.text}>AAER Meets</div>
      </ListItem>
      <ListItem component={Link} to="#" className={classes.hover}>
          <ListItemIcon><ImportContactsIcon /></ListItemIcon>
          <div className={classes.text}>AAER Notes</div>
      </ListItem>
      <ListItem component={Link} to="#" className={classes.hover}>
          <ListItemIcon><BookmarkIcon /></ListItemIcon>
          <div className={classes.text}>Bookmarks</div>
      </ListItem>
    </List>
    <Divider />

    <List>
    <div style={{paddingLeft: 8}}>
        <div className={classes.text} style={{marginTop: 18, marginBottom: 18, color: 'rgba(0, 0, 0, 0.38)', fontSize: 10}}>
            Legal research tools
        </div>
    </div>
      
      <ListItem component={Link} to="#" className={classes.hover}>
          <ListItemIcon><CheckCircleOutlineIcon /></ListItemIcon>
          <div className={classes.text}>Latest Judgements</div>
          <ListItemIcon><ArrowRightIcon  /></ListItemIcon>
      </ListItem>

      <ListItem component={Link} to="#" className={classes.hover}>
          <ListItemIcon><CheckCircleOutlineIcon /></ListItemIcon>
          <div className={classes.text}>Law Reports</div>
          <ListItemIcon><ArrowRightIcon  /></ListItemIcon>
      </ListItem>
      <ListItem component={Link} to="#" className={classes.hover}>
          <ListItemIcon><GavelIcon /></ListItemIcon>
          <div className={classes.text}>Law of the Feration</div>
      </ListItem>
      <ListItem component={Link} to="#" className={classes.hover}>
          <ListItemIcon><HomeWorkIcon /></ListItemIcon>
          <div className={classes.text}>Regulations of MDAs</div>
      </ListItem>
    </List>
    <List>

    <Divider />

    <div style={{paddingLeft: 8}}>
        <div className={classes.text} style={{marginTop: 18, marginBottom: 18, color: 'rgba(0, 0, 0, 0.38)', fontSize: 10}}>
          courts & Agreements
        </div>
    </div>
      
      <ListItem component={Link} to="#" className={classes.hover}>
          <ListItemIcon><NoteIcon /></ListItemIcon>
          <div className={classes.text}>Court Forms</div>
          <ListItemIcon><ArrowRightIcon  /></ListItemIcon>
      </ListItem>

      <ListItem component={Link} to="#" className={classes.hover}>
          <ListItemIcon><AccountBalanceIcon /></ListItemIcon>
          <div className={classes.text}>Rules of Courts</div>
          <ListItemIcon><ArrowRightIcon  /></ListItemIcon>
      </ListItem>
      <ListItem component={Link} to="#" className={classes.hover}>
          <ListItemIcon><ChatIcon /></ListItemIcon>
          <div className={classes.text}>Forms & Agreements</div>
      </ListItem>
      
    </List>
    <List>

    <Divider />

    <div style={{paddingLeft: 8}}>
        <div className={classes.text} style={{marginTop: 18, marginBottom: 18, color: 'rgba(0, 0, 0, 0.38)', fontSize: 10}}>
            continous education
        </div>
    </div>
      
      <ListItem component={Link} to="#" className={classes.hover}>
          <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
          <div className={classes.text}>Buy Textbooks</div>
      </ListItem>

      <ListItem component={Link} to="#" className={classes.hover}>
          <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
          <div className={classes.text}>Sell Textbooks</div>
      </ListItem>
      <ListItem component={Link} to="#" className={classes.hover}>
          <ListItemIcon><LibraryBooksIcon /></ListItemIcon>
          <div className={classes.text}>Articles & Journals</div>
      </ListItem>
    </List>

    <Divider />

    <List>
    <div style={{paddingLeft: 8}}>
        <div className={classes.text} style={{marginTop: 18, marginBottom: 18, color: 'rgba(0, 0, 0, 0.38)', fontSize: 10}}>
            Extras
        </div>
    </div>
      
      <ListItem component={Link} to="#" className={classes.hover}>
          <ListItemIcon><StarsIcon /></ListItemIcon>
          <div className={classes.text}>Nuggets</div>
      </ListItem>

      <ListItem component={Link} to="#" className={classes.hover}>
          <ListItemIcon><ContactPhoneIcon /></ListItemIcon>
          <div className={classes.text}>AAER Blog</div>
      </ListItem>
      
    </List>
    <Divider />

  </Drawer>
  );
}
