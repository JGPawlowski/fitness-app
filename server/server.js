import express from 'express';
import cors from 'cors';
import nutritionRouter from './routes/nutrition.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Namespace API routes with /api
app.use('/api/nutrition', nutritionRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


