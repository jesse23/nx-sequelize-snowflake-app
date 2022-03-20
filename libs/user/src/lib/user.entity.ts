import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  id: number;

  @Column
  userName: string;

  @Column
  email: string;

  @Column
  zipCode: string;
}
