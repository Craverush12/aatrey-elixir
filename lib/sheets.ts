import { google } from 'googleapis';

function getAuth() {
  const raw = process.env.GOOGLE_SHEETS_CREDENTIALS!;
  const credentials = JSON.parse(
    Buffer.from(raw, 'base64').toString('utf-8')
  );
  return new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
}

export async function appendRow(
  tab: string,
  values: (string | number | boolean | null)[]
): Promise<void> {
  const auth = await getAuth();
  const sheets = google.sheets({ version: 'v4', auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID!,
    range: `${tab}!A:Z`,
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[new Date().toISOString(), ...values]],
    },
  });
}
