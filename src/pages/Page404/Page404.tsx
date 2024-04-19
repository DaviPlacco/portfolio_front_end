import { Link } from "react-router-dom"

export const Page404 = () => {
    return(
        <>
            <section className="w-full h-screen flex flex-col justify-center items-center gap-6">
                <h2 className="text-white text-8xl font-['Oxanium']">
                    Page 404
                </h2>
                <p className="text-white font-['inter']">
                    oops.. Nothing to see here
                </p>
                <Link to={"/"} className="text-white underline decoration-1">Go back to the content</Link>
            </section>
        </>
    )
}