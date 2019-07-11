import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class LyricCreate extends React.PureComponent {
  state = {
    content: '',
  }

  onSubmit = event => {
    const { mutate, songId } = this.props
    const { content } = this.state

    event.preventDefault()

    mutate({
      variables: {
        content,
        songId,
      },
    }).then(() => this.setState({ content: '' }))
  }

  render() {
    const { content } = this.state
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="input">
          Add a Lyric
          <input
            value={content}
            onChange={event => this.setState({ content: event.target.value })}
          />
        </label>
      </form>
    )
  }
}

const mutation = gql`
  mutation AddLyricToSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        id
        content
        likes
      }
    }
  }
`

export default graphql(mutation)(LyricCreate)
