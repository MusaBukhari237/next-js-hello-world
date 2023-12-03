import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod';

const userSchema = z.object({
    name: z.string().min(3),
});

// Get = Get Items
// Post = Create Item
// Put = Update Item
// Patch = Update Properties of Item
// Delete = Delete Item

export function GET(request: NextRequest, { params: { id } }: any) {
    return NextResponse.json({
        id: id,
        name: "Musa"
    })
}

export async function POST(request: NextRequest, { params: { id } }: any) {
    let body: any;
    try {
        body = await request.json();
    } catch (e) {
        body = {};
    }

    const validateBody = userSchema.safeParse(body);
    if (!validateBody.success)
        return NextResponse.json(validateBody.error.errors, { status: 400 });

    return NextResponse.json({
        id: id,
        name: "Musa",
        ...body
    });
}
