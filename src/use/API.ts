import { ITask, ITaskNoId } from '@/assets/interfaces/interface'

console.log(import.meta.env)
const port = import.meta.env.VITE_FRONT_PORT ?? 5173
const addr = `http://localhost:${port}`
console.log(addr)
export const useApi = () => {
  async function getTasks() {
    const response = await fetch(`${addr}/tasks`)
    if (response.ok) {
      return await response.json()
    } else {
      throw new Error('Ошибка HTTP: ' + response.status)
    }
  }

  async function addTask(task: ITaskNoId) {
    const response = await fetch(`${addr}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(task)
    })
    return response.json()
  }

  async function editTask(task: ITask) {
    console.log(task)
    return await fetch(`${addr}/tasks/put`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(task)
    })
  }

  async function deleteTask(id: number) {
    return await fetch(`${addr}/tasks/delete`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        id
      })
    })
  }

  return {
    getTasks,
    addTask,
    editTask,
    deleteTask
  }
}
