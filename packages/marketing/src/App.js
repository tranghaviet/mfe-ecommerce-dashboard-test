import React from 'react'
import { Switch, Route, BrowserRouter} from 'react-router-dom'
import { StylesProvider } from '@material-ui/core/styles'

import Landing from './components/Landing'
import Pricing from './components/Pricing'

export default function () {
  return <div>
    <StylesProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/pricing" component={Pricing}/>
          {/* path "/" must be at the bottom */}
          <Route path="/" component={Landing}/>
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  </div>
};
