import { google } from "googleapis";

async function handlePost(req, res) {
	const { email, consent } = req.body;

	if (! email) throw new Error('A valid email is required');
	if (! consent) throw new Error('Consent to receive communications is required');

  const auth = new google.auth.GoogleAuth({
		credentials: {
			client_email: process.env.GOOGLE_CLIENT_EMAIL,
			private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
		},
		scopes: ["https://www.googleapis.com/auth/spreadsheets"],
	});

	const sheets = google.sheets({ version: "v4", auth });

	await sheets.spreadsheets.values.append({
		spreadsheetId: process.env.GOOGLE_SHEET_ID,
		range: "Sheet1!A:A",
		valueInputOption: "USER_ENTERED",
		requestBody: {
			values: [[email, new Date().toISOString()]],
		},
	});

	return { success: true };
}

export default async function handler(req, res) {
    if (req.method === 'POST') {
				try {
					const data = await handlePost(req, res);
					res.status(200).json({ data: data });
				} catch(error) {
					res.status(500).json({ error: error.message})
				}
    } else {
        res.status(501).json({ error: `${req.method} has not been implemented at this route` })
    }
}