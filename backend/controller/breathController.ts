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
    console.log(_chalk.bgGreen("GET"), "/api/techniques called");

    const techniques = await db.raw(`SELECT 
    t.purpose,
    t.difficulty,
    t.duration,
    t.culture,
    t.name AS technique_name,
    t.description AS technique_description,
    ARRAY_AGG(
        json_build_object(
            'order', i.instruction_order,
            'name', i.name,
            'description', i.description
        )
    ) AS instructions
    FROM 
        techniques t
    JOIN 
        instructions i ON t.id = i.techniqueId
    GROUP BY 
        t.id, t.purpose, t.difficulty, t.duration, t.name, t.description
    ORDER BY 
        t.id;
`);
    res.json({ techniques: techniques.rows });
  },
};

export default breathController;
