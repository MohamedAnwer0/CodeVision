// layouts
import Container from "./Container";

// components
import ColorBackground from "../../components/ColorBackground";
import MeshBackground from "../../components/MeshBackground";

// api
import tracks from "../../api/Tracks.json";

function index() {
    return (
        <div className="mt-10 space-y-20">
            <ColorBackground
                position={"left-1/2 top-1/2 -translate-1/2"}
                className={"fixed"}
            />
            {tracks.map((track, index) => {
                return (
                    <Container
                        title={track.title}
                        description={track.description}
                        levels={track.levels}
                        key={index}
                    />
                );
            })}
        </div>
    );
}

export default index;
