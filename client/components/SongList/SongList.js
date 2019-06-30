import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { NavLink } from 'react-router-dom'

import { paths } from '../../routes/paths'
class SongList extends React.Component {

  renderSongs() {
    return this.props.data.songs.map( song => 
      <li key={song.id} className={'collection-item'}>
        {song.title}
      </li>
    )
  }

  render() {
    return (
      this.props.data.loading
        ? <div>Loading...</div>
        : <div>
          <ul className={'collection'}>
            {this.renderSongs()}
          </ul>
          <NavLink 
            to={paths.SONG_CREATE} 
            className={'btn-floating btn-large red right'}
          >
            <i className={'material-icons'}>add</i>
          </NavLink>
        </div>
    )
  }
}

const query = gql`
  {
    songs {
      title
      id
    }
  }
`

export default graphql(query)(SongList);