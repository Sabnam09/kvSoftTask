
import React from 'react'

const TodoList = ({ todosData }) => {

    return (
        <>
            <div className='py-10 px-2 w-[50%] m-auto bg-lime-200'>
                <ul className='p-5'>
                    <h1 className='text-[32px]'>Todo list</h1>
                    {!todosData || todosData?.length === 0 ? (<li>
                        <h3 className='text-[28px]'>No Todos</h3>
                    </li>) :
                        todosData?.map((val) => {
                            return (
                                <li key={val.id} className='bg-amber-200 p-2 m-4'>
                                    <p className={`${val.completed === true ? 'line-through' : ''} `}> 
                                    {val.id} :- {val.text}</p>
                                </li>
                            )
                        })}
                </ul>

            </div>
        </>
    )
}

export default TodoList