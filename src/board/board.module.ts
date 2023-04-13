import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';
import { boardProviders } from './board.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [BoardController],
  providers: [BoardService, ...boardProviders]
})
export class BoardModule {}
