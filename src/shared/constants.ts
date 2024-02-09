import { resolve } from "path";

export const EXAMPLE_CONST = "example";

export const STATICS_PATH = resolve(__dirname, "static");
export const TEMPLATES_PATH = resolve(__dirname, "templates");

// Database connection information
export const DATABASE_CONFIG = {
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || "your_db_username",
  password: process.env.DB_PASSWORD || "your_db_password",
  database: process.env.DB_NAME || "your_database_name",
};

// API endpoints (relative to the server URL)
export const API_ENDPOINTS = {
  USER: "/api/users",
  POST: "/api/posts",
};

// Configuration options for the application
export const APP_CONFIG = {
  DEBUG_MODE: process.env.DEBUG_MODE === 'true' || false,
  MAX_UPLOAD_SIZE: 10 * 1024 * 1024, // 10MB
};