import { google } from 'googleapis';
import { requireEnv } from '@/lib/env';

function getAuth() {
  const raw = requireEnv('GOOGLE_SHEETS_CREDENTIALS');
  const credentials = JSON.parse(
    Buffer.from(raw, 'base64').toString('utf-8')
  );
  return new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
}

export async function getOrderCount(): Promise<number> {
  try {
    const auth = await getAuth();
    const sheets = google.sheets({ version: 'v4', auth });
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: requireEnv('GOOGLE_SHEET_ID'),
      range: 'ORDERS!A:A',
    });
    const rows = res.data.values ?? [];
    // Subtract 1 for the header row; clamp to 0
    return Math.max(0, rows.length - 1);
  } catch {
    return 0;
  }
}

export async function appendRow(
  tab: string,
  values: (string | number | boolean | null)[]
): Promise<void> {
  const auth = await getAuth();
  const sheets = google.sheets({ version: 'v4', auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId: requireEnv('GOOGLE_SHEET_ID'),
    range: `${tab}!A:Z`,
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[new Date().toISOString(), ...values]],
    },
  });
}
