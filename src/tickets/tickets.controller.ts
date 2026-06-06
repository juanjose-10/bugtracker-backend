import { Body, Controller, Get, Post } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { Param, Patch } from '@nestjs/common';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Post()
  create(@Body() body: any) {
    return this.ticketsService.create(body);
  }

  @Get()
  findAll() {
    return this.ticketsService.findAll();
  }
  
  @Patch(':id')
actualizar(
  @Param('id') id: number,
  @Body() body: any,
) {
  return this.ticketsService.actualizarEstado(id, body.estado);
}
}