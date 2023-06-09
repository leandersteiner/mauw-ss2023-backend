import { IsNotEmpty, IsString } from 'class-validator';

export class AddUserToTeamDto {
  @IsString()
  @IsNotEmpty()
  public userId: string;
}
