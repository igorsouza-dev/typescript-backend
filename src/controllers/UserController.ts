import { Request, Response} from 'express';
import EmailService from '../services/EmailService';

const users = [
  { name: 'Igor', email: 'igorsouza.dev@gmail.com' },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },
  async create(req: Request, res: Response) {
    const emailService = new EmailService();
    emailService.sendMail({
      to: { name: 'Igor', email: 'igorsouza.dev@gmail.com'},
      message: { subject: 'Welcome', body: 'Welcome to my system'}
    });
    return res.send();
  }
}