// ... existing code ...

const TaskRow = ({ task }) => {
  return (
    <div className="gantt-task-row">
      <div 
        className="gantt-task-info"
        data-parent={task.subtasks && task.subtasks.length > 0}
      >
        {task.name}
      </div>
      {/* ... 其他任务相关的渲染代码 ... */}
    </div>
  );
};

// ... existing code ...