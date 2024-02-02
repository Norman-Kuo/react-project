import memeData from "../data/memesData.jsx"

function Meme (props){

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        console.log(url)
        
    }
    return (
        <main>
            <p>{url}</p>
            <div className="form">
                <input type="text"
                placeholder="Top Text"
                className="form--input" />

                <input type="text"
                placeholder="Bottom Text"
                className="form--input"/>
            

            <button onClick={getMemeImage} 
                    className="form--button">
                Get a new meme image 🖼
            </button>
            </div>
        </main>
        
    )

}

export default Meme