import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react'

async function UserDetails({ params: { id } }: any) {
    const userRequest = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
    const user: any = await userRequest.json();
    const abc = {};
    if (user.id === null || user.id === undefined) notFound();
    return (
        <div className='flex justify-center flex-col gap-10'>
            <h1>UserDetails</h1>
            <Link href={`/users/${id}/keys`} className='link link-primary'>View Details by Keys</Link>

            <div className="stats shadow">

                <div className="stat">
                    <div className="stat-title">User ID</div>
                    <div className="stat-value">{user.id}</div>
                </div>

                <div className="stat">
                    <div className="stat-title">UserName</div>
                    <div className="stat-value">{user.username}</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Full Name</div>
                    <div className="stat-value">{user.name}</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Email</div>
                    <div className="stat-value">{user.email}</div>
                </div>

            </div>
            </div>
    )
}

export default UserDetails