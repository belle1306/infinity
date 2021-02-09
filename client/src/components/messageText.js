import React, {Component} from 'react';
import axios from 'axios';

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

//     getQuote() {
//         fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
//         .thencd(response => {
//             return response.json();
//         })
//         .then(data => {
//             res.data.quotes
//             let quoteNum = Math.floor(Math.random() * data.length)
//             let randomQuote = data[quoteNum]
//         })
//         this.setState({
//             quote: randomQuote["quote"],
//             author: randomQuote["author"]
//         });
// }

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
                <h3 className="title">Tap the planet to generate more quotes from great people</h3>
                <div id="quote-box">
                    <QuoteBox quote={quote} author={author} />
                </div>
                <div id="buttons">
                <Button title='New Quote' onClick={this.getNewQuote} />
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
            <div id='author'><h5>{author}</h5></div>
        </div>
        )
    }

 //Button component
const Button = ({ onClick, title }) => {
    return (
        <button className='button' id='new-quote' onClick={onClick}>{title}</button>
    )
}


export default MessageText;
