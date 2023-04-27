import { ICreateUserTokenDTO } from "../dtos/ICreateUserTokenDTO";
import { UserTokens } from "../infra/typeorm/entities/userTokens";

export interface IUsersTokensRepository {
  deleteById(id: string): Promise<void>;
  findByUserIdAndRefreshToken(user_id: string, token: string): Promise<UserTokens>;
  create(data: ICreateUserTokenDTO): Promise<UserTokens>;
}
