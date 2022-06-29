import { makeStyles } from "@material-ui/core"
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap" 
  },
  card: {
    display: "flex",
    padding: 16,
    background: "#FFFFFF",
    flexDirection: "column",
    marginBottom: "50px",
    flexWrap: "wrap",
    boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
    borderRadius: '4px',
  },
  label: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '10px',
    lineHeight: '16px',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
  },
  headingText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '22px',
    lineHeight: '33px',
    color: 'rgba(0, 0, 0, 0.87)',
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

  date: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '24px',
    letterSpacing: '0.4px',
    color: 'rgba(0, 0, 0, 0.6)',
  }
}))

const Card = ({
    date, 
    author,
    heading, 
    text,
    style,
}) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
        <div className={classes.card} style={{...style}}>
            <div className={classes.author} style={{...style}}>
                {author}
            </div>
            <div className={classes.headingText} style={{...style}}>
                {heading}
            </div>
            <div className={classes.date} style={{...style}}>
                {date}
            </div>
            <div className={classes.text} style={{...style}}>
                {text}
            </div>
            <div className={classes.text} style={{width: "33%", alignSelf: "flex-end", ...style}}>
                View
            </div>
        </div>
    </div>
  )
}

export default Card
