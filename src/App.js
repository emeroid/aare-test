import { Router } from 'react-router-dom'
import { history } from "./util"
//import { CustomSnackBar } from './util/includes'
import Layout from './components/structure/Layout';

const App = () => {
  return (
    <Router history={history} >
      <div className="app">
        <Layout />
      </div>
    </Router>
  )
}

export default App
