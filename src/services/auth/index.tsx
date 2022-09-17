import React, { createContext, useState } from 'react';

interface IDataUser {}

export type ILoginData = {
    userData: IDataUser;
    setUserData: Function;
    logined: boolean;
    setLogined: Function;
};

export const AuthContext = createContext<ILoginData>({} as ILoginData);

const AuthProvider: React.FC = ({ children }: any) => {
    const [userData, setUserData] = useState<IDataUser>({} as IDataUser);
    const [logined, setLogined] = useState<boolean>(false);

    return (
        <AuthContext.Provider
            value={{
                userData,
                setUserData,
                logined,
                setLogined,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
