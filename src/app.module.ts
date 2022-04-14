import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudCapteurModule } from './api/crud-capteur/crud-capteur/crud-capteur.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [CrudCapteurModule,MongooseModule.forRoot('mongodb+srv://lexotime:passerpasser123123@cluster0.cx5k3.mongodb.net/hydrophone?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
