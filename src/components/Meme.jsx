import React from "react"

function Meme (){

    const [meme, setMeme] = React.useState({
        topText: "Top Text", 
        bottomText: "Bottom Text", 
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })
    const [memeData, setMemeData] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setMemeData(data.data.memes))

    }, [])

    function getMemeImage() {
        const memesArray = memeData
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url



        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url,
            topText: meme.topText,
            bottomText: meme.bottomText
        }))
        // const url = memesArray[randomNumber].url
        // console.log(url)
        
    }
    
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">

                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={setMeme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={setMeme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--Image"></img>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            
        </main>
        
    )

}

export default Meme