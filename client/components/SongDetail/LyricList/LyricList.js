import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class LyricList extends React.PureComponent {
  onLike = (id, likes) => {
    const { mutate } = this.props
    mutate({
      variables: {
        id,
      },
      optimisticResponse: {
        __typename: 'Mutation',
        lykeLyrics: {
          id,
          __typename: 'LyricType',
          likes: likes + 1,
        },
      },
    })
  }

  renderLyrics() {
    const { lyrics } = this.props

    return lyrics.map(({ id, content, likes }) => (
      <li key={id} className="collection-item">
        {content}
        <div className="vote-box">
          <i className="material-icons" role="none" onClick={() => this.onLike(id, likes)}>
            thumb_up
          </i>
          {likes}
        </div>
      </li>
    ))
  }

  render() {
    return <ul className="collection">{this.renderLyrics()}</ul>
  }
}

const mutation = gql`
  mutation LikeLyrics($id: ID) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`

export default graphql(mutation)(LyricList)
