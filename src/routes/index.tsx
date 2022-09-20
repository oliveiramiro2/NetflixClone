import React, { useContext, useState, useEffect } from 'react';

import PublicRoutes from './public';
import PrivateRoutes from './private';
import { AuthContext } from '../services/auth';

const RoutesNetflix: Function = () => {
    const [stack, setStack] = useState<boolean>(false);

    const { logined } = useContext(AuthContext);

    useEffect(() => {
        setStack(logined);
    }, [logined]);

    return stack ? <PublicRoutes /> : <PrivateRoutes />;
};

export default RoutesNetflix;
