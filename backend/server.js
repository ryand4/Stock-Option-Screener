// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Simple API endpoint for testing the connection
app.get('/api/test', (req, res) => {
    res.json({ message: "Hello from backend!" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
