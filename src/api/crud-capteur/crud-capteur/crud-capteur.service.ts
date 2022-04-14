import { Injectable } from '@nestjs/common';
import { CreateCrudCapteurDto } from './dto/create-crud-capteur.dto';
import { UpdateCrudCapteurDto } from './dto/update-crud-capteur.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CrudCapteur } from './entities/crud-capteur.entity';

@Injectable()
export class CrudCapteurService {
  constructor( @InjectModel('CrudCapteur') private crudCapteurModel: Model<CrudCapteur>){}

  async create(createCrudCapteurDto: CreateCrudCapteurDto) {
    const newInfo = new this.crudCapteurModel(createCrudCapteurDto);
    return await newInfo.save();
  }

  async findAll() {
    return await this.crudCapteurModel.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} crudCapteur`;
  // }

  // update(id: number, updateCrudCapteurDto: UpdateCrudCapteurDto) {
  //   return `This action updates a #${id} crudCapteur`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} crudCapteur`;
  // }
}
