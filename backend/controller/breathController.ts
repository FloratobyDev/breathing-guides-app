import { Request, Response } from "express";

const breathController = {
  getBreath:
    async (req: Request, res: Response) => (req: Request, res: Response) => {
      console.log("GET /hello called");
      res.send("Hello from Express!");
    },
};

export default breathController;
