"use client";

import { useEffect, useState } from "react";
import VideoPlayer from "../components/VideoPlayer";

type Race = { id: number; title: string; date: string; videoUrl: string };

export default function RacesPage() {
    const [races, setRaces] = useState<Race[]>([]);

    useEffect(() => {
        fetch('/api/races')
            .then(res => res.json())
            .then(setRaces);
    }, []);

    return (
        <div className="space-y-4">
            <h2 className="text-3xl font-bold">All Past Races</h2>
            {races.map(r => (
                <div key={r.id} className="bg-white rounded shadow p-4">
                    <h3 className="text-xl">{r.title}</h3>
                    <p className="text-sm text-gray-600">{new Date(r.date).toDateString()}</p>
                    <VideoPlayer url={r.videoUrl} />
                </div>
            ))}
        </div>
    );
}