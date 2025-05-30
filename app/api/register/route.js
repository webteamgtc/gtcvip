import { NextResponse } from "next/server";

// pages/api/proxy.js
export async function POST(req, res) {
    try {
        const response = await fetch('https://dev.returning.ai/api-15697164', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req.body),
        });

        return NextResponse.json({ message: response?.statusText, status: response?.status }, { status: 200 })



    } catch (error) {
        console.error("Proxy Error:", error);
        return NextResponse.json({ message: error }, { status: 500 })

    }
}
