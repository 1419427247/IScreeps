function TaskManager() {
    var queue = [];

    queue[TaskManager.TaskType.Construction] = [];
    queue[TaskManager.TaskType.Collection] = [];
    queue[TaskManager.TaskType.Charge] = [];

    this.isEmpty = function (TaskType) {
        return queue[TaskManager.TaskType].length == 0;
    }
    this.pushTask = function (task, priority = TaskManager.TaskPriority.Low) {
        switch (priority) {
            case TaskManager.TaskPriority.High:
                    queue[task.TaskType].unshift(0,0,task.arge);
                break;
            case TaskManager.TaskPriority.Medium:
                    queue[task.TaskType].splice(parseInt(queue[task.TaskType].length/2) + 1,0,task.arge);
                break;
            case TaskManager.TaskPriority.Low:
                    queue[task.TaskType].push(task.arge);
                break;
            default:
                    queue[task.TaskType].push(task.arge);
                break;
        }
    }
    this.acceptTask = function (TaskType) {
        if (this.isEmpty(TaskType))
            return null;
        return queue[TaskType].shift();
    }
    this.update = function(){
        
    }
}
TaskManager.TaskType = {
    Construction: 0,
    Collection: 1,
    Charge: 2,
};

TaskManager.TaskPriority = {
    High: 0,
    Medium: 1,
    Low: 2,
};

TaskManager.Task = function(type, arge) {
    this.type = type;
    this.arge = arge.concat();
};

module.exports =  TaskManager;