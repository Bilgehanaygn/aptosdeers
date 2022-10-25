import Header from "../Header/Header";


const Layout = ({children}) => {

    return (
        <div style={{width:"100vw", height:"100vh"}} >
            <Header/>
            {children}
        </div>
    )
}

export default Layout;