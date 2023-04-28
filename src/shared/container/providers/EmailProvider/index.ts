import { container } from "tsyringe";
import { EtherealMailProvider } from "./implementations/EtherealMailProvider";
import { IEmailProvider } from "./IEmailProvider";

container.registerSingleton<IEmailProvider>("EtherealMailProvider", EtherealMailProvider);
