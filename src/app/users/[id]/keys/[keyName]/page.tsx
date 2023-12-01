import React from 'react'

async function UserEmail({ params: { id, keyName } }: any) {
  const userRequest = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const user: any = await userRequest.json();

  return (
    <div className='flex justify-center flex-col gap-10'>
      <h1>UserDetails Via Key</h1>

      <div className="stat">
        <div className="stat-title"><b>Key:</b> {keyName}</div>
        <div className="stat-value">{user[keyName] ? user[keyName] : "Invalid Key"}</div>
      </div>
    </div>
  )
}

export default UserEmail