import { Router } from 'express';
import UsersRouter from './UserRoutes/users';
import ClientRouter from './ClientRoutes/clients';

const router = Router();

router.use('/user', UsersRouter)
router.use('/client', ClientRouter)

export default router;