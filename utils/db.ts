import mysql, { Connection } from 'mysql2/promise';

// Ensure the environment variables are present
if (!process.env.MYSQL_HOST || !process.env.MYSQL_USER || !process.env.MYSQL_PASSWORD || !process.env.MYSQL_DATABASE) {
    throw new Error('Missing one or more MySQL environment variable(s). Ensure MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, and MYSQL_DATABASE are set.');
}

export const connectToDB = async (): Promise<Connection> => {
    return mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    });
};


//Connection string itself for API routes and components

// import { connectToDB } from '../../utils/db';

// export default async (req, res) => {
//     const connection = await connectToDB();

//     try {
//         const [rows] = await connection.query('SELECT something FROM your_table');
//         res.json(rows);
//     } catch (error) {
//         res.status(500).json({ error: 'Database query failed' });
//     }

//     connection.end();
// };