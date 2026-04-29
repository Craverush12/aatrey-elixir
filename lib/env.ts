const REQUIRED_SERVER_ENV = [
  'RESEND_API_KEY',
  'FROM_EMAIL',
  'TEAM_EMAIL',
  'GOOGLE_SHEETS_CREDENTIALS',
  'GOOGLE_SHEET_ID',
] as const;

const OPTIONAL_SERVER_ENV = [
  'RAZORPAY_KEY_SECRET',
  'NEXT_PUBLIC_RAZORPAY_KEY_ID',
] as const;

export function requireEnv(name: (typeof REQUIRED_SERVER_ENV)[number]): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export function getOptionalEnv(name: (typeof OPTIONAL_SERVER_ENV)[number]): string | null {
  return process.env[name] || null;
}

export function getServerEnvStatus() {
  return {
    required: REQUIRED_SERVER_ENV.map((name) => ({
      name,
      configured: Boolean(process.env[name]),
    })),
    optional: OPTIONAL_SERVER_ENV.map((name) => ({
      name,
      configured: Boolean(process.env[name]),
    })),
  };
}
