import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('producttest')
export class ProductTest {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'uuid' }) 
    tester_id: string;

    @Column({ type: 'uuid' }) 
    product_id: string;

    @Column({ type: 'text', default: 'Observed_reactions' })
    reaction: string;

    @Column({ type: 'integer', default: 5 })
    rating: number;

    @Column({ type: 'integer', default: 0 })
    survival_status: number;
}
