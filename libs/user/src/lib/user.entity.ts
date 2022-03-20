import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column({primaryKey: true, autoIncrement: true})
  id: number;

  @Column
  userName: string;

  @Column
  email: string;

  @Column
  zipCode: string;
}
