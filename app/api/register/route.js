import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json(); // ✅ Parse JSON body from request

    const response = await fetch('https://integration.returning.ai/apis/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer 91bce713f979d72d50d80634195daad0c1003edef644aff6ee0d7bf99ef583fe`,
      },
      body: JSON.stringify(body),
    });

    const responseData = await response.json();

    return NextResponse.json({
      message: response.statusText,
      status: response.status,
      data: responseData,
    }, { status: response.status });

  } catch (error) {
    console.error("Proxy Error:", error);
    return NextResponse.json({ message: "Proxy Error", error: error.message }, { status: 500 });
  }
}
