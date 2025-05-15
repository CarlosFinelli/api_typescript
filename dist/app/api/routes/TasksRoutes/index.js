import { Router } from 'express';
import db from '../../db';
const TasksRoutes = Router();
const tableName = 'task';
TasksRoutes.post('/', async (req, res) => {
    const data = req.body;
    db.query(`INSERT INTO ${tableName} SET ? RETURNS *`, data, (err, result) => {
        if (err) {
            console.log(`Error creating task: ${err}`);
            res.status(500).json({ message: `Error creating task: ${err}` });
        }
        res.status(200).json(result);
    });
});
TasksRoutes.get('/', async (req, res) => {
    db.query(`SELECT * FROM ${tableName}`, (err, results) => {
        if (err) {
            console.log(`Error getting tasks: ${err}`);
            res.status(500).json({ message: `Error getting tasks: ${err}` });
        }
        res.status(200).json(results);
    });
});
TasksRoutes.get('/:id', async (req, res) => {
    const { id } = req.params;
    db.query(`SELECT * FROM ${tableName} WHERE task_id = ?`, [id], (err, results) => {
        if (err) {
            console.log(`Error getting task by id: ${err}`);
            res.status(500).json({ message: `Error getting task by id: ${id}` });
        }
        res.status(200).json(results);
    });
});
TasksRoutes.get('/user/:id', async (req, res) => {
    const { id } = req.params;
    db.query(`SELECT * FROM ${tableName} WHERE user_id = ?`, [id], (err, results) => {
        if (err) {
            console.log(`Error fetching tasks by user: ${err}`);
            res.status(500).json({ message: `Error fetching tasks by user: ${err}` });
        }
        res.status(200).json(results);
    });
});
TasksRoutes.put('/:id', async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    db.query(`UPDATE ${tableName} SET ? WHERE task_id = ? RETURNS *`, [data, id], (err, results) => {
        if (err) {
            console.log(`Error updating task: ${err}`);
            res.status(500).json({ message: `Error updating task: ${err}` });
        }
        res.status(201).json(results);
    });
});
TasksRoutes.delete('/:id', async (req, res) => {
    const { id } = req.params;
    db.query(`DELETE FROM ${tableName} WHERE task_id = ? RETURNS *`, [id], (err, result) => {
        if (err) {
            console.log(`Error deleting task: ${err}`);
            res.status(500).json({ message: `Error deleting task: ${id}` });
        }
        res.status(200).json(result);
    });
});
export default TasksRoutes;
