import { join } from "path";

export const ExampleConst = "example";

export const staticsPath = join(__dirname, "static"); // Example: Path to serve static files
export const templatesPath = join(__dirname, "templates"); // Example: Path to templates

// Database connection information
export const databaseConfig = {
  host: "localhost",
  port: 5432,
  username: "your_db_username",
  password: "your_db_password",
  database: "your_database_name",
};

// API endpoints (relative to the server URL)
export const apiEndpoints = {
  user: "/api/users",
  post: "/api/posts",
};

// Configuration options for the application
export const appConfig = {
  debugMode: false,
  maxUploadSize: 10 * 1024 * 1024, // 10MB
};
