import React from 'react'

const JoinCreateChat = () => {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="p-8 w-full flex flex-col gap-6 max-w-md rounded dark:bg-gray-900 shadow">
        <h1 className=" text-2xl font-semibold text-center mb6"
        >Join Room / Create Room
        </h1>
        <div className=" ">
          <label htmlFor="" className="block font-medium mb-2">
            Your name
          </label>
        </div>
      </div>
    </div>
  )
}

export default JoinCreateChat
