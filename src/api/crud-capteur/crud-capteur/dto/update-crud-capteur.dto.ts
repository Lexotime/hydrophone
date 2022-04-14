import { PartialType } from '@nestjs/mapped-types';
import { CreateCrudCapteurDto } from './create-crud-capteur.dto';

export class UpdateCrudCapteurDto extends PartialType(CreateCrudCapteurDto) {}
