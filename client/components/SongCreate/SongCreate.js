import React from 'react'
import { NavLink } from 'react-router-dom'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import fetchSongs from '../../queries/fetchSongs'
import paths from '../../routes/paths'

class SongCreate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
    }
  }

  onSubmit = event => {
    const { title } = this.state
    const { mutate, history } = this.props

    event.preventDefault()

    mutate({
      variables: {
        title,
      },
      refetchQueries: [
        {
          fetchSongs,
        },
      ],
    })
      .then(() => history.push(paths.ROOT))
      .catch(() => {})
  }

  render() {
    const { title } = this.state
    return (
      <section className="container">
        <NavLink to={paths.ROOT}>Back</NavLink>
        <h4>Create a New Song</h4>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="input">
            Song tytle:
            <input onChange={event => this.setState({ title: event.target.value })} value={title} />
          </label>
        </form>
      </section>
    )
  }
}

const mutation = gql`
  mutation AddSong($title: String!) {
    addSong(title: $title) {
      title
    }
  }
`

export default graphql(mutation)(SongCreate)
