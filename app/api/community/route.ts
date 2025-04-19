import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    const posts = await prisma.discussionPost.findMany({ orderBy: { createdAt: 'desc' } });
    return NextResponse.json(posts);
}

export async function POST(req: NextRequest) {
    const { userId, content } = await req.json();
    const post = await prisma.discussionPost.create({ data: { authorId: userId, content } });
    return NextResponse.json(post, { status: 201 });
}