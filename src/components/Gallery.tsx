import ImageComponent from "./ImageComponent.tsx";

const Gallery = () => {
    const image1 = "./picture1.jpg"
    return (
        <div className="home">
            <ImageComponent src={image1}/>
        </div>
    )
}

export default Gallery