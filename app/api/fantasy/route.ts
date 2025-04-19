import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    const picks = await prisma.fantasyPick.findMany({
        orderBy: { createdAt: 'desc' },
        include: { race: true }
    });
    return NextResponse.json(picks);
}

export async function POST(req: NextRequest) {
    const { userId, raceId, pick } = await req.json();
    const fantasy = await prisma.fantasyPick.create({ data: { userId, raceId, pick } });
    return NextResponse.json(fantasy, { status: 201 }); 
}