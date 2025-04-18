"use client";
import { useEffect, useState } from "react";

type Post = { id: number; content: string; createdAt: string };

export default function CommmunityPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [content, setContent] = useState('');

    const load = async () => {
        const res = await fetch('/api/community');
        setPosts(await res.json());
    };

    useEffect(() => { load(); }, []);

    const submit = async () => {
        await fetch('/api/community', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: 1, content })
        });
        setContent('');
        await load();
    };

    return (
        <div className="space-y-4">
            <h2 className="text-3xl font-bold">Community Discussion</h2>
            <div className="flex gap-2">
                <input
                    className="flex-1 border p-2 rounded"
                    placeholder="Share your thought..."
                    value={content}
                    onChange={e => setContent(e.target.value)}
                />
                <button
                    className="px-4 py-2 bg-red-600 text-white rounded"
                    onClick={submit}
                >
                    Post
                </button>
            </div>
            {posts.map(p => (
                <div key={p.id} className="bg-white rounded p-4">
                    <p>{p.content}</p>
                    <small className="text-gray-500">{new Date(p.createdAt).toLocaleString()}</small>
                </div>
            ))}
        </div>
    );
}