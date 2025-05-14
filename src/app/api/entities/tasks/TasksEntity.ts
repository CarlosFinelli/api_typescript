export interface TasksEntity {
    id_task?: number;
    name: string;
    finished?: boolean;
    created_at: Date;
    updated_at?: Date;
    deleted_at?: Date; 
}