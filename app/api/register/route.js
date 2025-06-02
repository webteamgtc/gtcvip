import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json(); // ✅ Parse JSON body from request

    const response = await fetch('https://integration.returning.ai/apis/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer 1c1f3df817bd3dbfabe7bdfe3b49f4b2aa81c69eefdeb4890f5aec51c85c62b2`,
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
