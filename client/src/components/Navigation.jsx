import {Link} from 'react-router-dom'

export function Navigation() {
  return (
    <div className='flex justify-between py-5 bg-zinc-800'>
        <Link to='/tasks' className='font-bold text-3xl mb-4 ml-5'><h1>Tasks App</h1></Link>
        <Link to='/tasks-create' className='bg-zinc-900 px-5 py-3 rounded-lg hover:bg-zinc-700 mr-5'>Create Task</Link>
    </div>
  )
}