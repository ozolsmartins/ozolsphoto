import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import picture1 from "../assets/picture1.jpg"

export default function Images() {
    const images = [
        {
            original: picture1,
            thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
            original: "https://picsum.photos/id/1015/1000/600/",
            thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
    ];

    return(
        <ImageGallery items={images}/>
    )
}