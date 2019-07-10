import React from 'react'
import { graphql } from 'react-apollo'
import { NavLink } from 'react-router-dom'
import gql from 'graphql-tag'
import fetchSongs from '../../queries/fetchSongs'

import paths from '../../routes/paths'

class SongList extends React.Component {
  onSongDelete = id => {
    const { mutate, data } = this.props
    mutate({
      variables: {
        id,
      },
    }).then(() => data.refetch())
  }

  renderSongs() {
    const { data } = this.props

    return data.songs.map(({ id, title }) => (
      <li key={id} className="collection-item">
        <NavLink to={`/song/${id}`}>{title}</NavLink>
        <i className="material-icons" role="none" onClick={() => this.onSongDelete(id)}>
          delete
        </i>
      </li>
    ))
  }

  render() {
    const { data } = this.props

    return data.loading ? (
      <div>Loading...</div>
    ) : (
      <div>
        <ul className="collection">{this.renderSongs()}</ul>
        <NavLink to={paths.SONG_CREATE} className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </NavLink>
      </div>
    )
  }
}

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`

export default graphql(mutation)(graphql(fetchSongs)(SongList))
