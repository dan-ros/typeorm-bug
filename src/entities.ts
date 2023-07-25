import {
  Entity,
  TableInheritance,
  PrimaryColumn,
  ChildEntity,
  ManyToMany,
  Column,
  JoinTable,
} from 'typeorm';

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export abstract class Mammal {
  @PrimaryColumn()
  mammalId: number;
}

@ChildEntity()
export class Human extends Mammal {
  @ManyToMany(() => Toy, (t) => t.humans)
  toys: Toy[];

  @Column()
  name: string;
}

@ChildEntity()
export class Dog extends Mammal {
  @ManyToMany(() => Toy, (t) => t.dogs)
  toys: Toy[];

  @Column()
  name: string;
}

@Entity()
export class Toy {
  @PrimaryColumn()
  toyId: number;

  @Column()
  name: string;

  @ManyToMany(() => Human, (h) => h.toys)
  @JoinTable({
    name: 'human_toy_mapping',
    joinColumn: {
      name: 'humanToyMappingToyId',
      referencedColumnName: 'toyId',
    },
    inverseJoinColumn: {
      name: 'humanToyMappingHumanId',
      referencedColumnName: 'mammalId',
    },
  })
  humans: Human[];

  @ManyToMany(() => Dog, (d) => d.toys)
  @JoinTable({
    name: 'dog_toy_mapping',
    joinColumn: {
      name: 'dogToyMappingToyId',
      referencedColumnName: 'toyId',
    },
    inverseJoinColumn: {
      name: 'dogToyMappingDogId',
      referencedColumnName: 'mammalId',
    },
  })
  dogs: Dog[];
}
