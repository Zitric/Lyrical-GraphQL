import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

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
        : <ul className={'collection'}>
            {this.renderSongs()}
          </ul>
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