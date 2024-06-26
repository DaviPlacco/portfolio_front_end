import '../../App.css'

export const Header = () => {
    return(
        <section id="main-section" className="z-10 h-32 flex items-center justify-center fixed top-0 left-0 right-0">
            <a id="daviplaccologolink" aria-label="Back to top!" href="#">
                <h2 id="daviplaccologo" className="text-center text-[26px] font-light font-['Oxanium'] sm:text[36px]">@daviplacco</h2>
            </a>
        </section>
    )
}