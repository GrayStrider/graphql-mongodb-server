import Task from "../../../server/models/Task";
export default {
  Mutation: {
    createTask: async (parent, {task}, context, info) => {
      const newTask = await new Task ({
        content: task.content,
        description: task.description,
        task: task.completed
      });
      return new Promise((resolve, reject) => {
        newTask.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }
}
