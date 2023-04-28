import { container } from "tsyringe";
import { IDateProvider } from "./IDateProvider";
import { DayJsDateProvider } from "./impl/DayJsDateProvider";

container.registerSingleton<IDateProvider>("DateProvider", DayJsDateProvider);
