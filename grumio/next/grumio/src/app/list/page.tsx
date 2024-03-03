'use client'

import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';

export default function List() {
    const [list, setList] = useState([])
    const fetchList = () => {
        fetch("/grumio/getlist")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setList(data)
            })
    }
    useEffect(() => {
        fetchList()
    }, [])
    function getlist() {
        return list.map((item, i) => {
            return (
                <Fragment key={i}>
                    <tr>
                        <td>
                            {(i + 1)}
                        </td>
                        <td>
                            {item}
                        </td>
                    </tr>
                </Fragment>
            );
        })
    }
    return (
        <main>
            <div style={{ paddingLeft: '34%', paddingTop: '2%', display: 'flex' }}>
                <h2 style={{ paddingRight: '10px' }}>
                    <Link href="/">Home</Link>
                </h2>
                <h2>
                    <Link href="/list">List</Link>
                </h2>
            </div>
            <div style={{ paddingLeft: '34%', paddingTop: '3%' }}>
                <table>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.length > 0 && (getlist())}
                    </tbody>
                </table >
            </div>
        </main>
    );
}
