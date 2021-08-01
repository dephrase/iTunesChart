const SongList = ({topTwenty}) => {

    const songsObjectsArray = topTwenty["feed"]["entry"].map((song, index) => {
      
        return(   
        <>
        <div key={index} className="songBox">
            <div className="songPicture">
                <img key="img" alt="album cover" className="songImage" src={topTwenty["feed"]["entry"][index]["im:image"][2]["label"]}></img>
            </div>
            <div className="songInfo">
                <p key="pos" className="chartPosition">Uk Chart Position: #{index + 1}</p>
                <p key="title" className="title">Title: {topTwenty["feed"]["entry"][index]["im:name"]["label"]}</p>
                <p key="artist" className="artist">Artist: {topTwenty["feed"]["entry"][index]["im:artist"]["label"]}</p>
                <p key="price" className="price">Price: {topTwenty["feed"]["entry"][index]["im:price"]["label"]}</p>
            </div>
            <div className="preview">
                <audio controls src={topTwenty["feed"]["entry"][index]["link"][1]["attributes"]["href"]}/>
            </div>
        </div>
        </>
        )
    })

    return(
        <>
        <div>
        <ul>
            {songsObjectsArray}
        </ul>
        </div>
        </>
    )
}

export default SongList;