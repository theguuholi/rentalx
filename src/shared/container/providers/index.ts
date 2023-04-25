import { container } from "tsyringe";
import { IDateProvider } from "./DateProvider/IDateProvider";
import { DayJsDateProvider } from "./DateProvider/impl/DayJsDateProvider";

container.registerSingleton<IDateProvider>("DateProvider", DayJsDateProvider);
