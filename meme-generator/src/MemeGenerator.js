import React, { Component } from 'react'
import '../src/MemeGenerator.css'

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText : "",
            buttomText : "",
            randomImg: " http://i.imgflip.com/1bij.jpg",
            allMemeImages: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            console.log(memes[0])
            this.setState({allMemeImages : memes})
        })
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    handleSubmit(event) {
        const randNum = Math.floor(Math.random() * this.state.allMemeImages.length)
        const randMemeImg = this.state.allMemeImages[randNum].url

        this.setState({
            randomImg: randMemeImg
        })


        event.preventDefault()
    }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="memm-form">
            <input 
                type="text"
                name="topText" 
                value={this.state.topText}
                placeholder="Top text"
                onChange={this.handleChange}
            />
            <input 
                type="text"
                name="bottomText" 
                value={this.state.bottomText}
                placeholder="Bottom text"
                onChange={this.handleChange}
            />
            <button>Gen</button>
        </form>
        <div className="meme-gen-section">
            <img src={this.state.randomImg} />
            <div className="top-text">
                <h2>{this.state.topText}</h2>
            </div>
            <div className="bottom-text">
                <h2>{this.state.bottomText}</h2>
            </div>
        </div>
      </div>
    )
  }
}
export default MemeGenerator
