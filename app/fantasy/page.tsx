"use client";
import { useEffect, useState } from "react";

type Pick = {
    id: number;
    pick: string;
    race: { title: string };
    createdAt: string;
};

export default function FantasyPage() {
    const [picks, setPicks] = useState<Pick[]>([]);
    const [raceId, setRaceId] = useState('');
    const [pick, setPick] = useState('');

    const load = async () => {
        const res = await fetch('/api/fantasy');
        setPicks(await res.json());
    };

    useEffect(() => { load(); }, []);

    const submit = async () => {
        await fetch('/api/fantasy', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: 1, raceId: Number(raceId), pick })
        });
        setRaceId(''); setPick('');
        await load();
    };

    return (
        <div className="space-y-4">
            <h2 className="text-3xl font-bold">Fantasy Picks</h2>
            <div className="flex gap-2">
                <input
                    className="w-24 border p-2 rounded"
                    placeholder="Race ID"
                    value={raceId}
                    onChange={e => setRaceId(e.target.value)}
                />
                <input
                    className="flex-1 border p-2 rounded"
                    placeholder="Driver Name"
                    value={pick}
                    onChange={e => setPick(e.target.value)}
                />
                <button className="px-4 py-2 bg-red-600 text-white rounded"
                onClick={submit}>
                    Submit
                </button>
            </div>
            {picks.map(f => (
                <div key={f.id} className="bg-white rounded p-4">
                    <p><strong>{f.pick}</strong> for <em>{f.race.title}</em></p>
                    <small className="text-gray-500">{new Date(f.createdAt).toLocaleString()}</small>
                </div>
            ))}
        </div>
    );
}