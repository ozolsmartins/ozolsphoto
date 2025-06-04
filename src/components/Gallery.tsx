import Images from "./Image.tsx";

const Gallery = () => {
    return (
        <div>
            <div className="homeText" style={{paddingTop:"100px"}}><h1>Some samples of my work</h1></div>
            <div className="gallery">
                <Images/>
            </div>
        </div>
    )
}

export default Gallery