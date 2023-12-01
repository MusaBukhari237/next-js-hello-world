import React from 'react'
import { sort } from 'fast-sort';
import Link from 'next/link';

async function Users({ searchParams: { sortOrder, sortType } }: any) {
    const userRequest = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: any = await userRequest.json();
    const sortedUsers: any = Object.keys(users[0]).includes(sortOrder) ? (sortType === "desc" ? sort(users).desc(sortOrder) : sort(users).asc(sortOrder)) : users;
    return (
        <div className='flex justify-center flex-col gap-10'>
            <h1>Users</h1>

            <table className='table'>
                <thead>
                    <tr>
                        <th>
                            <Link href={`/users?sortOrder=name&sortType=${sortType === "desc" ? 'asc': 'desc'}`}>
                                Full Name
                            </Link>
                        </th>
                        <th>
                            <Link href={`/users?sortOrder=email&sortType=${sortType === "desc" ? 'asc' : 'desc'}`}>
                                Email
                            </Link>
                        </th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedUsers.map((item: any, index: number) =>
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <Link href={`/users/${item.id}`}>
                                <td className='link link-primary'>View</td>
                            </Link>
                        </tr>
                    )}
                </tbody>
            </table>

        </div>
    )
}

export default Users