import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../components/Home/Home'
import SongCreate from '../components/SongCreate/SongCreate'
import SongDetail from '../components/SongDetail/SongDetail'

import paths from './paths'

const Routes = () => {
  return (
    <Switch>
      <Route path={paths.SONG_CREATE} exact component={SongCreate} />
      <Route path={paths.SONG_DETAIL} exact component={SongDetail} />
      <Route path={paths.ROOT} exact component={Home} />
    </Switch>
  )
}

export default Routes
