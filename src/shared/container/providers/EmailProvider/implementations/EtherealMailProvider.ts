import { injectable } from "tsyringe";
import { IEmailProvider } from "../IEmailProvider";
import nodemailer, { Transporter } from "nodemailer";

@injectable()
export class EtherealMailProvider implements IEmailProvider {
  private client: Transporter;

  constructor() {
    nodemailer
      .createTestAccount()
      .then((account) => {
        const transporter = nodemailer.createTransport({
          host: "smtp.ethereal.email",
          port: 587,
          auth: {
            user: "chyna.erdman81@ethereal.email",
            pass: "HQW4F2ANrg6dERBcES",
          },
        });

        this.client = transporter;
      })
      .catch((err) => console.error(err));
  }
  async sendMail(to: string, subject: string, body: string): Promise<void> {
    const message = await this.client.sendMail({
      to,
      from: "Gus@.com",
      subject,
      text: body,
      html: body,
    });

    console.log("Message sent: %s", message.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(message));
  }
}
