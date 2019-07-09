import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../components/Home/Home'
import SongCreate from '../components/SongCreate/SongCreate'

import paths from './paths'

export default () => {
  return (
    <Switch>
      <Route path={paths.SONG_CREATE} exact component={SongCreate} />
      <Route path={paths.ROOT} exact component={Home} />
    </Switch>
  )
}
