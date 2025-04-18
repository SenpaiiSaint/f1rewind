import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const races = await prisma.race.findMany({ orderBy: { date: 'desc' } });
    return NextResponse.json(races);
}

