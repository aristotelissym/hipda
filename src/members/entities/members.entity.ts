import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('members')
export class Members {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    last_name: string;

    @Column()
    first_name: string;

    @Column()
    expertise: string;

    @Column()
    role: string;

    @Column()
    sector: string;

    @Column()
    health_unit: string;

    @Column()
    work_place: string;

    @Column()
    home_place: string;

    @Column({ unique: true })
    email: string;

    @Column({ unique: false })
    phone: string;

    @Column()
    consent: string;


}