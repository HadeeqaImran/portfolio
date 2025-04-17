import { Router } from 'express';

const router = Router();

// Example: router.use('/projects', projectsRoutes);

router.get('/', (req, res) => {
  res.json({ message: 'API is working!' });
});

export default router;
