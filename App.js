import { useState } from 'react';
import { StyleSheet } from 'react-native';
import TaskList from './app/components/Task/TaskList';
import TaskData from './app/components/Task/TaskData';
import Task from './app/components/Task/Task';

export default function App() {

  const [taskList, setTaskList] = useState(TaskData);

// //  uncomment the line to get task list app w image description

//   return <TaskList taskList={taskList} />;

// uncomment the next two lines for card with image title above and description below app

  return(
<Task />

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
