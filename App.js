import { useState } from 'react';
import { StyleSheet } from 'react-native';
import TaskList from './app/components/tasks/TaskList';
import TaskData from './app/components/tasks/TaskData';

export default function App() {

const [taskList, setTaskList] = useState(TaskData);

  return <TaskList taskList={taskList} />;

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
