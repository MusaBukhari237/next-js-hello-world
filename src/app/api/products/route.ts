import { NextRequest, NextResponse } from "next/server";
import Products from "./products";
import { z } from "zod";

const productSchema = z.object({
    name: z.string().min(3),
    price: z.number().min(0.1),
});

export function GET(request: NextRequest) {
    return NextResponse.json(Products, {status: 200});
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validateBody = productSchema.safeParse(body);
    if (!validateBody.success) {
        return NextResponse.json({success: false, errors:validateBody.error.errors}, {status: 400})
    } else {
        return NextResponse.json({
            id: Math.round(Math.random()*1000),
            ...body
        });
    }
}