import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const payload = await req.json();
    const record = payload.record;

    if (!record) {
      return new Response(JSON.stringify({ error: "No record provided" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { name, email, phone, subject, message, project_type, created_at } = record;

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY") || "re_FC5yeQTU_AC5JavpCtrUFiuwR4N6REeq5";
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not set");
    }

    const formattedDate = new Date(created_at).toLocaleString("en-AU", {
      timeZone: "Australia/Melbourne",
      dateStyle: "full",
      timeStyle: "short",
    });

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin:0;padding:0;background-color:#f5f5f5;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f5f5;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
          <tr>
            <td style="background-color:#1a1a1a;padding:32px 40px;text-align:center;">
              <p style="margin:0;color:#c9a96e;font-size:13px;letter-spacing:3px;text-transform:uppercase;font-weight:600;">Khushi Homes</p>
              <h1 style="margin:8px 0 0;color:#ffffff;font-size:22px;font-weight:700;">New Contact Enquiry</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:40px;">
              <p style="margin:0 0 24px;color:#555;font-size:15px;line-height:1.6;">
                You have received a new contact form submission. Here are the details:
              </p>

              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8e8e8;border-radius:6px;overflow:hidden;margin-bottom:24px;">
                <tr style="background-color:#f9f9f9;">
                  <td style="padding:12px 16px;font-size:13px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:1px;width:140px;border-bottom:1px solid #e8e8e8;">Name</td>
                  <td style="padding:12px 16px;font-size:15px;color:#1a1a1a;border-bottom:1px solid #e8e8e8;">${name || "—"}</td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;font-size:13px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:1px;border-bottom:1px solid #e8e8e8;">Email</td>
                  <td style="padding:12px 16px;font-size:15px;color:#1a1a1a;border-bottom:1px solid #e8e8e8;">
                    <a href="mailto:${email}" style="color:#c9a96e;text-decoration:none;">${email || "—"}</a>
                  </td>
                </tr>
                <tr style="background-color:#f9f9f9;">
                  <td style="padding:12px 16px;font-size:13px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:1px;border-bottom:1px solid #e8e8e8;">Phone</td>
                  <td style="padding:12px 16px;font-size:15px;color:#1a1a1a;border-bottom:1px solid #e8e8e8;">
                    <a href="tel:${phone}" style="color:#c9a96e;text-decoration:none;">${phone || "—"}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;font-size:13px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:1px;border-bottom:1px solid #e8e8e8;">Project Type</td>
                  <td style="padding:12px 16px;font-size:15px;color:#1a1a1a;border-bottom:1px solid #e8e8e8;">${project_type || "—"}</td>
                </tr>
                ${subject ? `
                <tr style="background-color:#f9f9f9;">
                  <td style="padding:12px 16px;font-size:13px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:1px;border-bottom:1px solid #e8e8e8;">Subject</td>
                  <td style="padding:12px 16px;font-size:15px;color:#1a1a1a;border-bottom:1px solid #e8e8e8;">${subject}</td>
                </tr>` : ""}
                <tr ${subject ? "" : 'style="background-color:#f9f9f9;"'}>
                  <td style="padding:12px 16px;font-size:13px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:1px;">Submitted</td>
                  <td style="padding:12px 16px;font-size:15px;color:#1a1a1a;">${formattedDate}</td>
                </tr>
              </table>

              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8e8e8;border-radius:6px;overflow:hidden;margin-bottom:32px;">
                <tr style="background-color:#f9f9f9;">
                  <td style="padding:12px 16px;font-size:13px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:1px;border-bottom:1px solid #e8e8e8;">Message</td>
                </tr>
                <tr>
                  <td style="padding:16px;font-size:15px;color:#1a1a1a;line-height:1.7;white-space:pre-wrap;">${message || "—"}</td>
                </tr>
              </table>

              <div style="text-align:center;">
                <a href="mailto:${email}" style="display:inline-block;background-color:#c9a96e;color:#ffffff;text-decoration:none;padding:14px 32px;border-radius:4px;font-size:15px;font-weight:600;letter-spacing:0.5px;">Reply to ${name}</a>
              </div>
            </td>
          </tr>
          <tr>
            <td style="background-color:#f9f9f9;padding:24px 40px;text-align:center;border-top:1px solid #e8e8e8;">
              <p style="margin:0;color:#aaa;font-size:12px;line-height:1.6;">
                This is an automated notification from your Khushi Homes website.<br>
                Manage your enquiries in the <a href="https://khushihomes.com.au/admin" style="color:#c9a96e;text-decoration:none;">admin dashboard</a>.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Khushi Homes Website <enquiries@khushihomes.com.au>",
        to: ["sunny@khushihomes.com.au"],
        reply_to: email,
        subject: `New Enquiry from ${name}${subject ? ` — ${subject}` : ""}`,
        html: emailHtml,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(`Resend API error: ${JSON.stringify(result)}`);
    }

    return new Response(JSON.stringify({ success: true, id: result.id }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("notify-contact error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
