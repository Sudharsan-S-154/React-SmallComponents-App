import React, { useState } from 'react'

const Testimonial = () => {

    const [quotes, setQuotes] = useState([
        {
            id: 1,
            author: "Aristotle",
            quote: "Happiness depends upon ourselves."
        },
        {
            id: 2,
            author: "Theodore Roosevelt",
            quote: "Do what you can, where you are."
        },
        {
            id: 3,
            author: "Albert Einstein",
            quote: "In the middle of difficulty lies opportunity."
        },
        {
            id: 4,
            author: "Henry David Thoreau",
            quote: "Success usually comes to those who hustle."
        },
        {
            id: 5,
            author: "Oprah Winfrey",
            quote: "Turn your wounds into wisdom."
        }
    ]);

    const [currentQuote, setCurrentQuote] = useState(0);

    return (
        <div className='testimonial'>
            <h2 className='quote'>{quotes[currentQuote].quote}</h2>
            <h4 className='quoteAuthor'>{`- ${quotes[currentQuote].author}`}</h4>
            <div className='btns'>
                <button disabled={currentQuote == 0} className='prevBtn' onClick={() => { setCurrentQuote(currentQuote - 1) }}>Prev</button>
                <button disabled={currentQuote == quotes.length-1} className='nextBtn' onClick={() => { setCurrentQuote(currentQuote + 1) }}>Next</button>
            </div>
        </div>
    )
}

export default Testimonial