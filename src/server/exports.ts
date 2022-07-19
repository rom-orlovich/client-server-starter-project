import { config } from "dotenv";
import express, { Request, Response } from "express";

config({ path: `${__dirname}/.env` });
const sqlite3 = sqlite.verbose();
const PORT = process.env.PORT || 5000;
const app = express();
const router = express.Router();
export { PORT, express, router, app, Request, Response };
