import { NextRequest, NextResponse } from "next/server";

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