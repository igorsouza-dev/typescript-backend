import { Request, Response} from 'express';
const users = [
  { name: 'Igor', email: 'igorsouza.dev@gmail.com' },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  }
}