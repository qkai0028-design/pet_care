import { Pool } from "pg";

declare global {
  var petCarePool: Pool | undefined;
}

const connectionString = process.env.POSTGRES_URL;

export function getPool() {
  if (!connectionString) {
    throw new Error("POSTGRES_URL is not configured.");
  }

  if (!globalThis.petCarePool) {
    globalThis.petCarePool = new Pool({
      connectionString,
      max: 5,
      idleTimeoutMillis: 30_000,
      connectionTimeoutMillis: 10_000,
      ssl: {
        rejectUnauthorized: false,
      },
    });
  }

  return globalThis.petCarePool;
}
