import React from 'react'
import { graphql } from 'react-apollo'
import { NavLink } from 'react-router-dom'
import fetchSong from '../../queries/fetchSong'
import LyricCreate from './LyricCreate/LyricCreate'
import LyricList from './LyricList/LyricList'

import paths from '../../routes/paths'

class SongDetail extends React.PureComponent {
  render() {
    const { data, match } = this.props

    if (!data.song) {
      return <div>Loading...</div>
    }

    return (
      <section className="container">
        <NavLink to={paths.ROOT}>Back</NavLink>
        <h3>{data.song.title}</h3>
        <LyricCreate songId={match.params.id} />
        <LyricList lyrics={data.song.lyrics} />
      </section>
    )
  }
}

export default graphql(fetchSong, {
  options: props => {
    return { variables: { id: props.match.params.id } }
  },
})(SongDetail)
