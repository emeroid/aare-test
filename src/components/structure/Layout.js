import { Suspense, useEffect } from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {route} from '../../util/'
import Header from './Header';
import { Switch, Route } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    marginRight: 240,
    padding: theme.spacing(3),
  },
}));

export default function Layout() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <main className={classes.content}>
        <div className={classes.toolbar} />
            <Suspense fallback={<div className={classes.loading}>loading...</div>}>
                <Switch>
                    {route && route.map((route, index)=>{
                        const {component : Component, path, exact} = route;
                        return <Route key={index} exact={exact} path={path} component={(routeProps)=>{
                            return <Component {...routeProps}/>
                        }}/>
                    })}

                </Switch>
            </Suspense>
      </main>
    </div>
  );
}
