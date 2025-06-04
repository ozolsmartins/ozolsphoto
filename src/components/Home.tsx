import { Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import {Link} from "react-router";

const Home = () => {
    return (
        <div className="home">
            <div className="homeText">
                <h1 style={{color: "white"}}>Hello there,<br/> I'm Mārtiņš Ozols</h1>
                <h3 style={{color: "white"}}>... and I like to take pictures</h3>
                <Tooltip title="Gallery"><Button
                    type="submit"
                    component={Link} to="/gallery"
                    className="siteButton">
                    Check them out
                </Button></Tooltip>
            </div>
        </div>
    )
}

export default Home