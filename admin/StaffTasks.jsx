import React from 'react';

const StaffTasks = () => {
  // Placeholder data for system tasks
  const tasks = [
    { id: 201, title: 'Pick up donation 102', assignedTo: 'Sarah', status: 'In Progress' },
    { id: 202, title: 'Input new inventory data', assignedTo: 'Unassigned', status: 'To Do' },
  ];

  return (
    <div className="page-container">
      <h2>📋 Staff Tasks</h2>
      <button className="btn-primary">Create New Task</button>
      
      <p>View and manage all active tasks assigned to the staff team.</p>

      <div className="task-board">
        {tasks.map(task => (
          <div key={task.id} className={`task-card status-${task.status.toLowerCase().replace(' ', '-')}`}>
            <h4>{task.title}</h4>
            <p>Assigned to: <strong>{task.assignedTo}</strong></p>
            <p>Status: {task.status}</p>
            <button>Edit Task</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaffTasks;
