import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";


export async function GET() {
    const races = await prisma.race.findMany({ orderBy: { date: 'desc' } });
    return NextResponse.json(races);
}

