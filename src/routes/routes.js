import Home from '../containers/Home'
import Profile from '../containers/Profile'
import NotFound from '../containers/NotFound'
import Create from '../containers/Create'

const Routes = [
  {exact: true, path: '/', component: Home},
  {path: '/profile', component: Profile},
  {path: '/create', component: Create},
  {path: null, component: NotFound},
]

export default Routes
