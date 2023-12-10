import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string; // 主键，自动生成

  @Column({
    type: 'varchar',
    length: 50,
    unique: true,
    comment: '用户名',
  })
  username: string;

  @Column({
    type: 'varchar',
    length: 50,
    comment: '密码',
    select: false,
  })
  password: string;
}
