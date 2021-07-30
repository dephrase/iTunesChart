

const SongList = ({topTwenty}) => {

    console.log(topTwenty["feed"]["entry"][0])
    console.log("title: " + topTwenty["feed"]["entry"][0]["im:name"]["label"])
    console.log("Artist: " + topTwenty["feed"]["entry"][0]["im:artist"]["label"])
    console.log("Price: " + topTwenty["feed"]["entry"][0]["im:price"]["label"])


    const songsObjectsArray = topTwenty["feed"]["entry"].map((song, index) => {
      
        return(   
        <>
        <div key={index} className="songBox">
            <div className="songInfo">
            <p>Uk Chart Position: #{index + 1}</p>
            <p>Title: {topTwenty["feed"]["entry"][index]["im:name"]["label"]}</p>
            <p>Artist: {topTwenty["feed"]["entry"][index]["im:artist"]["label"]}</p>
            <p>Price: {topTwenty["feed"]["entry"][index]["im:price"]["label"]}</p>
            </div>
            <div className="songPicture">
            <img src={topTwenty["feed"]["entry"][index]["im:image"][2]["label"]}></img>
            </div>
        </div>
        
        </>
        )
        
    })

    console.log(songsObjectsArray)

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