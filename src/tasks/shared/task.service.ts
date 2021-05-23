import { Injectable } from '@nestjs/common';
import { Task } from './task';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TaskService {
  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

  //search all data from db
  async getAll() {
    return await this.taskModel.find().exec();
  }

  //search one of all by id
  async getById(id: string) {
    return await this.taskModel.findById(id).exec();
  }

  //create a new task and save in the task collection in MongoDB
  async create(task: Task) {
    const createdTask = new this.taskModel(task);
    return await createdTask.save();
  }

  //update a task by id with the task received, and return the modified task
  async update(id: string, task: Task) {
    await this.taskModel.updateOne({ _id: id }, task).exec();
    return this.getById(id);
  }

  //delete a task by id
  async delete(id: string) {
    return await this.taskModel.deleteOne({ _id: id }).exec();
  }
}
