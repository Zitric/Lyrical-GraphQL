import React from 'react'
import { graphql } from 'react-apollo'
import fetchSong from '../../queries/fetchSong'

class SongDetail extends React.PureComponent {
  render() {
    // console.log(this.props)
    return (
      <div>
        <h3>Song Detail</h3>
      </div>
    )
  }
}

export default graphql(fetchSong)(SongDetail)
