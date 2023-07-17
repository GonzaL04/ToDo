import {useForm} from 'react-hook-form'
import { useEffect } from 'react'
import { createTask, deleteTask, updateTask, getOneTask } from '../api/tasks.api'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'

export function TasksFormPage() {
    const {register,
        handleSubmit,   
        formState : {errors},
        setValue
    } = useForm()

    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                const {data} = await getOneTask(params.id);
                setValue('title', data.title)
                setValue('description', data.description)
            }
        }
        loadTask();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const navigate = useNavigate()
    const params = useParams()

    const onSubmit = handleSubmit(async data => {
        if (params.id) {
            await updateTask(params.id, data)
            toast.success('Task updated', {
                style: {
                    background: '#DEDEDE',
                    color: '#111111',
                }
            })
        } else {
            await createTask(data);
            toast.success('Task created', {
                style: {
                    background: '#DEDEDE',
                    color: '#111111',
                }
            })
        }
        navigate('/tasks')
    })

    return (
        <div className='max-w-xl mx-auto'>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Write the title" {...register("title", {required: true})} className='bg-zinc-800 py-3 rounded-lg block w-full mb-3 mt-5'/>
                {errors.title && <span>This field is required</span>}
                <textarea rows="3" placeholder="Write the description" {...register("description", {required: true})} className='bg-zinc-800 py-3 rounded-lg block w-full mb-3 mt-3'></textarea>
                {errors.description && <span>This field is required</span>}
                <button className='bg-blue-500 p-3 rounded-lg block w-full mt-3 hover:bg-blue-700'>Save</button>
            </form>

            {params.id && (<button className='bg-red-500 p-3 rounded-lg mt-3 pl-6 pr-6 hover:bg-red-700' onClick={async () => {
                const accepted = window.confirm('Do you want delete the task?')
                if (accepted) {
                    await deleteTask(params.id)
                    toast.success('Task deleted'), {
                        position: 'bottom-right',
                        style: {
                            background: '#101010',
                            color: '#FFF',
                        }
                    }
                    navigate('/tasks')
                }
            }}>Delete</button>)}
        </div>
    )
}
