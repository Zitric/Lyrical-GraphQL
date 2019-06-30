import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { NavLink, history } from 'react-router-dom'

import { paths } from '../../routes/paths'

class SongCreate extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      title: ''
    }
  }

  onSubmit(event) {
    event.preventDefault()
    this.props.mutate({
      variables: {
        title: this.state.title
      }
    }).then(() => history.push(paths.ROOT))
      .catch(() => {})
  }

  render() {
    return (
      <section className={'container'}>
        <NavLink to={paths.ROOT}>Back</NavLink>
        <h4>Create a New Song</h4>
        <form onSubmit={this.onSubmit}>
          <label>
            Song Title:
          </label>
          <input onChange={ event => this.setState({ title: event.target.value } )} 
            value={ this.state.title }/>
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

export default graphql(mutation)(SongCreate);