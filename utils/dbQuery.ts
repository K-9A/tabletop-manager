import pool from "./db";
import { FieldPacket, RowDataPacket } from "mysql2/promise";

type QueryResult<T> = T & RowDataPacket[];

export async function dbQuery<T>(
  queryString: string,
  values?: any[]
): Promise<QueryResult<T>> {
  try {
    const [results] = await pool.query<QueryResult<T>>(
      queryString,
      values
    );
    return results;
  } catch (error) {
    throw new Error(`Database query failed: ${error}`);
  }
}
