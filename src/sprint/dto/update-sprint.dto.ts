import { Project } from 'src/project/project.schema';
import { Task } from 'src/task/task.schema';

export interface UpdateSprintDto {
  readonly name: string;
  readonly project: Project;
  readonly tasks: Task[];
}
