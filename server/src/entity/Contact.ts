import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid'; 

// the value here vvv ("contacts") is related to the table which this entity is related to
@Entity("contacts")
export class Contact {
    @PrimaryColumn()
    id: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    password: string

    @Column()
    email: string

    @Column()
    profilePhoto: string


    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}
