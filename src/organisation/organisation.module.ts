import { Module } from '@nestjs/common';
import { OrganisationController } from './organisation.controller';
import { OrganisationService } from './organisation.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organisation } from './organisation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Organisation])],
  controllers: [OrganisationController],
  providers: [OrganisationService]
})
export class OrganisationModule {}
