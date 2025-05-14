import { Router } from 'express';
import UsersRouter from './UserRoutes/users';
// import ClientRouter from './ClientRoutes';
import TasksRoutes from './TasksRoutes';

const router = Router();

router.use('/user', UsersRouter);
// router.use('/client', ClientRouter);
router.use('/tasks', TasksRoutes);

export default router;