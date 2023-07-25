import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Initial1000000000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'mammal',
        columns: [
          {
            name: 'mammalId',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'type',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'name',
            type: 'varchar',
            length: '255',
            isNullable: true,
          },
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'toy',
        columns: [
          {
            name: 'toyId',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
            length: '255',
          },
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'human_toy_mapping',
        columns: [
          {
            name: 'humanToyMappingToyId',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'humanToyMappingHumanId',
            type: 'int',
            isPrimary: true,
          },
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'dog_toy_mapping',
        columns: [
          {
            name: 'dogToyMappingToyId',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'dogToyMappingDogId',
            type: 'int',
            isPrimary: true,
          },
        ],
      }),
    );
  }

  public async down(): Promise<void> {
    console.error('No down method implemented');
  }
}
