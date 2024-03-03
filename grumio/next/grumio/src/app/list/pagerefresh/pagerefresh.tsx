import { useRouter } from 'next/router';
import { useEffect } from 'react';
function PageRefresh() {
    const router = useRouter();
    useEffect(() => {
        if (router.isReady) {
            router.push(router.asPath).catch((e) => {
                router.push('/_error');
            });
        }
    }, [router.isReady])
    return (
        <div>Loading...</div>
    );
}
export default PageRefresh;​