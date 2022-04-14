import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CrudCapteurService } from './crud-capteur.service';
import { CreateCrudCapteurDto } from './dto/create-crud-capteur.dto';
import { UpdateCrudCapteurDto } from './dto/update-crud-capteur.dto';

@Controller('crud-capteur')
export class CrudCapteurController {
  constructor(private readonly crudCapteurService: CrudCapteurService) {}

  @Post()
  async create(@Body() createCrudCapteurDto: CreateCrudCapteurDto) {
    return await this.crudCapteurService.create(createCrudCapteurDto);
  }

  @Get()
  async findAll() {
    return await this.crudCapteurService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.crudCapteurService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCrudCapteurDto: UpdateCrudCapteurDto) {
  //   return this.crudCapteurService.update(+id, updateCrudCapteurDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.crudCapteurService.remove(+id);
  // }
}
