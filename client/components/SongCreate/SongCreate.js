import React from 'react'
import gql from 'graphql-tag'

class SongCreate extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      title: ''
    }
  }

  onSubmit(event) {
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <h3>Create a New Song</h3>
        <form onSubmit={this.onSubmit}>
          <label>
            Song Title:
          </label>
          <input onChange={ event => this.setState({ title: event.target.value } )} 
            value={ this.state.title }/>
        </form>
      </div>
    )
  }
}

const mutation = gql`
  mutation{
    addSong(title: ${this.state.title})
  }
`

export default SongCreate;