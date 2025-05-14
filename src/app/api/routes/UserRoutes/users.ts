import express, { Request, Response } from 'express';
const UsersRouter = express.Router();
import db from '../../db';
import { UserEntity } from '../../entities/users/UserEntity';
import { createHashPassword } from '../../utils/bcrypt';

const tableName = 'users';

UsersRouter.post('/', async (req: Request, res: Response) => {
    try {
        const user: Partial<UserEntity> = req.body;
        const password = await createHashPassword(user.password!);
        db.query(`INSERT INTO ${tableName} (name, email, password) VALUES ?, ?, ? RETURNS *`, [user.name, user.email, password], (err, result) => {
            if(err) {
                console.log(`Error creating user: ${err}`);
                res.status(500).json({ message: `Error creating user: ${err}` });
                return;
            }
            res.status(201).json(result);
        });
    } catch(error) {
        throw new Error(`Error creeating user: ${error}`)
    }
})

UsersRouter.get('/', (_req: Request, res: Response) => {
    db.query('SELECT * FROM users', (err, results) => {
        if(err) {
            console.log(`Erro ao recuperar usuários: ${err}`);
            res.status(500).json({ message: `Erro ao recuperar usuários: ${err}` });
            return;
        }
        res.status(200).json(results)
    })
});

UsersRouter.get('/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    db.query('select * FROM users WHERE user_id = ?', [id], (err, result) => {
        if(err) {
            console.log(`Erro ao recuperar usuário: ${err}`);
            res.status(500).json({message: `Erro ao recuperar usuário: ${err}`});
            return;  
        }
        res.status(200).json(result);
    });
});

export default UsersRouter;