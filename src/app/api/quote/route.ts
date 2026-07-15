import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("Quote request:", body);
    // TODO: wire to email/SendGrid, CRM, or SMS
    return NextResponse.json({ success: true, message: "Quote request received" });
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request" }, { status: 400 });
  }
}
