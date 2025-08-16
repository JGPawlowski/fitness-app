import express from 'express';
import cors from 'cors';
import nutritionRouter from './routes/nutrition.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Namespace API routes with /api
app.use('/api/nutrition', nutritionRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


