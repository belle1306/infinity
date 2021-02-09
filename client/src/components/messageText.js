import React, {Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

class MessageText extends Component {
    constructor(props) {
        super(props)
        this.state= {
            quote: "",
            author: ""
        }
    }

    componentDidMount() {
        this.getQuote()
    }
    
    getQuote() {
        let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

        axios.get(url)
        .then(res => {
            let data = res.data.quotes
            let quoteNum = Math.floor(Math.random() * data.length)
            let randomQuote = data[quoteNum]

            this.setState({
                quote: randomQuote["quote"],
                author: randomQuote["author"]
            })
        })
    }

    getNewQuote = () => {
        this.getQuote()
    }


    render() {
        const { quote, author} = this.state
        return (
            <div id='wrapper'>
                <div id="quote-box">
                    <QuoteBox quote={quote} author={author} />
                </div>
                <div>
                <Button onClick={this.getNewQuote} />
                </div>
                <div className="container-submit">
                <Link to="/ThreeHome">
                    <button className="submittedButton"
                    type="submit">
                    Back to Home
                    </button>
                </Link>
                </div>
            </div>
        )
    }
}

// Quote Box component
const QuoteBox = ({ quote, author }) => { //destructuring
        return (
        <div>
            <div id='text'><p>{quote}</p></div>
            <div id='author'><p>"{author}"</p></div>
        </div>
        )
    }

 //Button component
const Button = ({ onClick, title }) => {
    return (
        <button className="quotesButton" id='new-quote' onClick={onClick}>Inspire Me!</button>
    )
}


export default MessageText;
