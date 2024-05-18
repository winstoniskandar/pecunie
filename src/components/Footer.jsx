export default function Footer() {
    return (
        <footer className={"border-t border-neutral-200 flex justify-center p-10"}>
            <div className={"flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between max-w-7xl w-full"}>
                <div>
                    <span className={"text-xl font-semibold"}>Pecunie</span>
                </div>
                <nav className={"flex flex-col lg:flex-row items-center gap-5 lg:gap-8"}>
                    <a href={"#product"} className={"nav-item"}>Product</a>
                    <a href={"#product"} className={"nav-item"}>Use Case</a>
                    <a href={"#features"} className={"nav-item"}>Features</a>
                    <a href={"#faq"} className={"nav-item"}>FAQ</a>
                </nav>
                <div className={"flex items-center gap-4 text-3xl"}>
                    <button className={"hover:text-violet-700 transition-colors"}>
                        <i className="fa-brands fa-discord"></i>
                    </button>
                    <button className={"hover:text-violet-700 transition-colors"}>
                        <i className="fa-brands fa-x-twitter"></i>
                    </button>
                    <button className={"hover:text-violet-700 transition-colors"}>
                        <i className="fa-solid fa-envelope"></i>
                    </button>
                </div>
            </div>
        </footer>
    )
}