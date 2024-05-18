import BlurSVG from "./BlurSvg";

export default function Section({ id, showBlur = false, fillScreen = false, children }) {
    return (
        <section className={`section py-20 px-5 sm:px-10 ${fillScreen ? 'fill' : ''}`} id={id}>
            {showBlur ? <BlurSVG /> : null}
            {children}
        </section>
    )
}