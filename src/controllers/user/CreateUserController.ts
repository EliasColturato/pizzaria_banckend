import { Request, Response, response } from 'express';

class CreateUserController {
  async handle(req: Request, res: Response) {
    return res.json({ ok: true });
  }
}

export { CreateUserController };
