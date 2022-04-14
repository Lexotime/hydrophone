import { Module } from '@nestjs/common';
import { CrudCapteurService } from './crud-capteur.service';
import { CrudCapteurController } from './crud-capteur.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { crudCapteurSchema } from './crud-capteur.model';

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: 'CrudCapteur',
      schema: crudCapteurSchema
    }
  ]),
],
  controllers: [CrudCapteurController],
  providers: [CrudCapteurService]
})
export class CrudCapteurModule {}
