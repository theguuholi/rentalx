import { container } from "tsyringe";
import { EtherealMailProvider } from "./implementations/EtherealMailProvider";
import { IEmailProvider } from "./IEmailProvider";

container.registerInstance<IEmailProvider>(
  "EtherealMailProvider",
  new EtherealMailProvider()
);
