import { useRouter } from 'next/router';
import React from 'react';

function Blog() {
    const router = useRouter()
    return (
        <div>
            post: {router.query.blog}
        </div>
    );
}

export default Blog;