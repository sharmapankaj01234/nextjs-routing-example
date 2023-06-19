import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

function Page1(props) {
    const router = useRouter()
    return (
        <div>
            Page1
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">one param dyanic link</Link>
                </li>
                <li>
                    <Link href="/catchAll/hello-world">Catch all</Link>
                </li>
            </ul>

            <button className='bg-blue-600 border-blue-800' onClick={() => router.push('/about')}>
                Click here to read more
            </button>
        </div>
    );
}

export default Page1;