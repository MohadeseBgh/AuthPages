const AuthLayOut = (props) => {

    return (
            <div className={"flex flex-col items-center justify-center content-center " +
                "rounded-2xl border-2 " +
                "h-5/6 w-4/6 " +
                "md:h-5/6 md:w-2/6 "+
                "shadow-gray-600 shadow-lg md:ml-10 bg-white " +
                " "}>
                {props.children}
            </div>

    )
}
export default AuthLayOut;