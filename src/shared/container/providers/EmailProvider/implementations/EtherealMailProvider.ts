import { injectable } from "tsyringe";
import { IEmailProvider } from "../IEmailProvider";
import nodemailer, { Transporter } from "nodemailer";
import handlebars from "handlebars";
import fs from "fs";

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
  async sendMail(
    to: string,
    subject: string,
    variables: any,
    path: string
  ): Promise<void> {
    const templateFileContent = fs.readFileSync(path).toString("utf-8");
    const templateParse = handlebars.compile(templateFileContent);
    const templateHtml = templateParse(variables);
    const message = await this.client.sendMail({
      to,
      from: "Gus@.com",
      subject,
      html: templateHtml,
    });

    console.log("Message sent: %s", message.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(message));
  }
}
