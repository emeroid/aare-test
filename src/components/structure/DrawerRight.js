import { Suspense, useEffect } from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Card from "../Card"
import Drawer from '@material-ui/core/Drawer';
import Form from "../Form"


const useStyles = makeStyles((theme) => ({
  drawer: {
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    padding: 8,
    background: "rgba(0, 0, 0, 0.6)"
  }

}));

export default function DrawerRight() {
  const classes = useStyles(),
  data = [
    {
      author: "Your note", 
      heading: "How could people together can help bringing peace to the world", 
      date: "14th June 2022",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Animi distinctio ea eligendi laborum nemo odio perferendis quas qui sint voluptatibus, iste minus perspiciatis quod vero!"
    },
    {
      author: "Your note", 
      heading: "How could people together can help bringing peace to the world", 
      date: "14th June 2022",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Animi distinctio ea eligendi laborum nemo odio perferendis quas qui sint voluptatibus, iste minus perspiciatis quod vero!"
    },
    {
      author: "Your note", 
      heading: "How could people together can help bringing peace to the world", 
      date: "14th June 2022",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Animi distinctio ea eligendi laborum nemo odio perferendis quas qui sint voluptatibus, iste minus perspiciatis quod vero!"
    },
    {
      author: "Your note", 
      heading: "How could people together can help bringing peace to the world", 
      date: "14th June 2022",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Animi distinctio ea eligendi laborum nemo odio perferendis quas qui sint voluptatibus, iste minus perspiciatis quod vero!"
    },
  ]
  return (
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={true}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div style={{display: "flex", justifyContent: "space-around", marginBottom: 33, marginTop: 33}}>
            <MenuIcon />
            <img src="/mode.png" alt="" width={60} height={25} />
            <img src="/logo.png" alt="" width={78} height={33} />
        </div>
        <Form button={{width: "90%"}} text={{color: "white"}} style={{width: "100%", background: "#000000", color: "white", border: '1px solid rgba(255, 255, 255, 0.38)'}}/>
        {
          data.map((items) => {
            return <Card
                      author={items.author}
                      heading={items.heading}
                      date={items.date}
                      text={items.text}
                      style={{background: "#000000", color: "rgba(255, 255, 255, 0.87)"}}
                      
                    />
          })
        }
 
      </Drawer>
  );
}
