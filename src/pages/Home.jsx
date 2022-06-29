import { makeStyles } from "@material-ui/core"
import Card from "../components/Card"
import Form from "../components/Form"

const Home = () => {
  const data = [
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
    <div style={{width: "100%"}}>
        <Form />
        {
          data.map((items) => {
            return <Card
                      author={items.author}
                      heading={items.heading}
                      date={items.date}
                      text={items.text}
                    />
          })
        }
      
    </div>
  )
}

export default Home
