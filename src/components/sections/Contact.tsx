import { DownloadCV } from "../Btn/DownloadCV"

export const ContactSection = () => {
    return(
        <>
            <section className="w-full py-[150px]">
                <div className="w-full flex justify-center">
                    <div className="w-[1280px] flex-col justify-center">
                        <h2 className="text-[56px] text-center font-['Oxanium'] text-white font-light pb-[35px]">
                            Contact me!
                        </h2>
                        <a id="davigmail" href="mailto:davibplacco@gmail.com" rel="noopener noreffer" target="_blank" className="text-[56px] text-center font-['Oxanium'] text-white font-light">
                            davibplacc@gmail.com
                        </a>
                        <div className="pt-[54px]">
                            <DownloadCV/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}