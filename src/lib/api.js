
        
const logOut = (setAuthUser, setIsAuthenticated) => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('auth_user');
    setAuthUser(null);
    setIsAuthenticated(false);
}
        
const setUserContext = (setAuthUser, setIsAuthenticated) => {
    setAuthUser(localStorage.getItem('auth_user'));
    setIsAuthenticated(!!localStorage.getItem('auth_user'));
}


export {
    setUserContext,
    logOut
}