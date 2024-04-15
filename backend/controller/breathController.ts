import { Request, Response } from "express";
import db from "../dbRequest";
import chalk from "chalk";

const breathController = {
  getBreath:
    async (req: Request, res: Response) => (req: Request, res: Response) => {
      console.log("GET /hello called");
      res.send("Hello from Express!");
    },
  getTechniques: async (req: Request, res: Response) => {
    // console.log(chalk.green("GET"));
    const _chalk = await chalk;
    console.log(_chalk.bgGreen('GET'), '/api/techniques called');
    
    
    const techniques = await db.raw("SELECT * FROM technique");
    res.json({ techniques: techniques.rows });
  },
};

export default breathController;
