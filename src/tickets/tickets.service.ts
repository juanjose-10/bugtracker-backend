import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ticket } from './ticket.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TicketsService {
  constructor(
    @InjectRepository(Ticket)
    private ticketRepo: Repository<Ticket>,
  ) {}

  create(data: any) {
    const ticket = this.ticketRepo.create(data);
    return this.ticketRepo.save(ticket);
  }

  findAll() {
    return this.ticketRepo.find();
  }
  async actualizarEstado(id: number, estado: string) {
  await this.ticketRepo.update(id, { estado });
  return this.ticketRepo.findOneBy({ id });
}
}