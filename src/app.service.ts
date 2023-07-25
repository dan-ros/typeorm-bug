import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Human, Dog } from './entities';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Human)
    private readonly humanRepo: Repository<Human>,
    @InjectRepository(Dog)
    private readonly dogRepo: Repository<Dog>,
  ) {}

  getHello() {
    //This is trying to go via the wrong mapping table
    this.humanRepo.find({
      relations: {
        toys: true,
      },
    });
  }
}
