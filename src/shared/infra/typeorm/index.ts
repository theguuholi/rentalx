import { Connection, createConnection, getConnectionOptions } from "typeorm";

// interface IOptions {
//   host: string;
// }

// getConnectionOptions().then((options) => {
//   const newOptions = options as IOptions;
//   // newOptions.host = 'database'; //Essa opção deverá ser EXATAMENTE o nome dado ao service do banco de dados
//   newOptions.host = "localhost"; //Essa opção deverá ser EXATAMENTE o nome dado ao service do banco de dados
//   createConnection({
//     ...options,
//   });
// });

export default async (host = "database"): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();
  return await createConnection(
    Object.assign(defaultOptions, {
      host: host,
    })
  );
};
