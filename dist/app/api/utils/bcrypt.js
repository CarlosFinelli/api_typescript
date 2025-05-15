import bcrypt from 'bcrypt';
export async function createHashPassword(password) {
    const saltRounds = 10;
    const hashedPassword = bcrypt.hash(password, saltRounds);
    return hashedPassword;
}
export async function compareHashPassword(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
}
