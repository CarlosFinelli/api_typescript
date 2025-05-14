import bcrypt from 'bcrypt';

export async function createHashPassword(password: string) : Promise<string> {
    const saltRounds = 10;
    const hashedPassword = bcrypt.hash(password, saltRounds);
    return hashedPassword;
}

export async function compareHashPassword(password: string, hashedPassword: string) : Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
}