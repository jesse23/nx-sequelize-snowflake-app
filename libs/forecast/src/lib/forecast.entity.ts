import { Table, Column, Model, PrimaryKey } from 'sequelize-typescript';

@Table({
 modelName: 'forecast_day',
 freezeTableName: true,
 timestamps: false,
})
export class ForecastDay extends Model {
  @PrimaryKey
  @Column({field: 'postal_code'})
  postCode: string

  @Column({field: 'date_valid_std'})
  date: Date;

  @Column({field: 'min_temperature_air_2m_f'})
  minTemp: number;

  @Column({field: 'avg_temperature_air_2m_f'})
  avgTemp: number;

  @Column({field: 'max_temperature_air_2m_f'})
  maxTemp: number;
}
