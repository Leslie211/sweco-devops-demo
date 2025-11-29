const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to my awesome DevOps application!' }); // Change this message
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

// Only start server if not in test mode
if (require.main === module) {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
