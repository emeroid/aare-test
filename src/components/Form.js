import { makeStyles, Button, TextField } from "@material-ui/core"
import Card from "./Card"
import InputAdornment from '@material-ui/core/InputAdornment';
import NoteAddIcon from '@material-ui/icons/NoteAdd';

const useStyles = makeStyles((theme) => ({
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
    text: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '0.5px',
        color: 'rgba(0, 0, 0, 0.6)',
        marginBottom: 20,
      },

}))

const Form = ({style, button, text}) => {
  const classes = useStyles()
  return (
    <div className={classes.card} style={{...style}}>
        <div className={classes.text} style={{...text}}>
            Make Note 
        </div>
        <TextField
            type="text"
            style={{marginBottom: 20, ...style}}
            fullWidth
            variant="outlined"
            placeholder="Subject"
            InputProps={{
                startAdornment: <InputAdornment position="start"><NoteAddIcon /></InputAdornment>,
          }}
        />

        <TextField
            type="text"
            rows={10}
            multiline
            label="Enter Note"
            style={{marginBottom: 20,  ...style}}
            fullWidth
            variant="outlined"
        />

        <Button variant="contained" style={{background: "#6200EE", width: "24%", ...button}} color="primary">
            Save New Note
        </Button>

    </div>
  )
}

export default Form
