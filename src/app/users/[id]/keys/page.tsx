import Link from 'next/link';
import React from 'react'

async function UserDetailsKeys({params: {id}}:any) {

    const userRequest = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
    const user: any = await userRequest.json();
    return (
        <div className='flex justify-center flex-col gap-10'>
            <h1>UserDetails</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Keys</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(user).map((item: any, index: any) =>
                        <tr>
                            <td>{item}</td>
                            <Link href={`/users/${id}/keys/${item}`}>
                                <td className='link link-primary'>View</td>
                            </Link>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>

    )
}

export default UserDetailsKeys