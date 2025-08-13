import { connect } from "./db/database";
import app from "./app";

// Create the Express app
const PORT = 5000;

// === Connect to DB ===
connect((error) => {
  if (error) {
    console.error(`Error connecting to the database: ${error}`);
    process.exit(1);
  }
  console.log(`DB Initialized`);
});

// === Start the Server ===
app.listen(PORT, (error) => {
  if (error) {
    console.error(`Error starting app: ${error}`);
    process.exit(1);
  }

  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
