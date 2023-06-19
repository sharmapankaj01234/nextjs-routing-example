import { useRouter } from 'next/router';
import React from 'react';

function Slag(props) {
    const router = useRouter()
    return (
        <div>
            passed params: {router.query.slag}
        </div>
    );
}

export default Slag;