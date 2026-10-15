import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message body are all required." },
        { status: 400 }
      );
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      console.warn("WEB3FORMS_ACCESS_KEY environment variable is not defined.");
      // If no access key is configured, return a clear message
      return NextResponse.json(
        {
          error: "Contact server configuration pending (WEB3FORMS_ACCESS_KEY missing).",
          success: false,
        },
        { status: 503 }
      );
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        message,
        subject: subject ? `[Portfolio Transmission] ${subject}` : `[Portfolio Transmission] from ${name}`,
        from_name: `${name} via Harshit Portfolio`,
        to_email: "harshit.workmain@gmail.com",
      }),
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({ success: true, message: "Message dispatched successfully." });
    }

    return NextResponse.json(
      { error: data.message || "Failed to deliver transmission." },
      { status: 500 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Internal server error processing contact request." },
      { status: 500 }
    );
  }
}
