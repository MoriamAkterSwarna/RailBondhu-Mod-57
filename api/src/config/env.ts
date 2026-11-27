import "dotenv/config";

function required(key: string): string {
  const value = process.env[key];
  if (!value) {
    console.error(`Invalid env: ${key} is required`);
    process.exit(1);
  }
  return value;
}

export const env = {
  NODE_ENV: process.env.NODE_ENV ?? "development",
  PORT: Number(process.env.PORT ?? 5000),
  WEB_URL: required("WEB_URL"),
  MONGODB_URI: required("MONGODB_URI"),
};
