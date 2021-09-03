import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './Components/Home'
import {NotFound} from './Components/NotFound'
// import {DndProvider} from 'react-dnd'
// import { HTML5Backend } from 'react-dnd-html5-backend'

export const App = () => {
  return (
    // <DndProvider backend={HTML5Backend}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    // </DndProvider>
  )
}

export default App
