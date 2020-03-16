interface IMailTo {
  name: string;
  email: string;
}
interface IMailMessage {
  subject: string;
  body: string;
  attachment?: Array<string>; 
}
interface IMailDTO {
  to: IMailTo;
  message: IMailMessage;
}
interface IEmailService {
  sendMail(request: IMailDTO): void;
}
class EmailService implements IEmailService{
  sendMail({to, message}: IMailDTO) {
    console.log(`Mail sent to ${to.name}: ${message.subject}`);
  }
}

export default EmailService;