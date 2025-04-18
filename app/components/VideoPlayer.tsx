"use client";
import ReactPlayer from "react-player";

export default function VideoPlayer({ url }: { url: string }) {
    return (
        <div className="aspect-video rounded overflow-hidden shadow">
            <ReactPlayer url={url} width="100%" height="height%" controls />
        </div>
    );
}


