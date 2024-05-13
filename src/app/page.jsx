"use client"
import Section from "@/components/Section";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {

	const [ email, setEmail ] = useState('');
	function handleSubmit(e) {
		e.preventDefault();
		console.log(email);
	}

	return (
		<main className="">
			<Section id={"product"} showBlur={true} fillScreen={true}>
				<div className={"flex flex-col justify-between gap-20 h-full"}>
					<div className={"flex flex-col items-center justify-center gap-6 text-center"}>
						<h1 className={"title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium"}>Unlock the Web!</h1>
						<span className={"text-[#9a91a1] font-medium text-base sm:text-lg"}>Agent Driven Data Extraction</span>
						<form onSubmit={handleSubmit} className={"flex border border-neutral-700 rounded-xl overflow-hidden"}>
							<input 
								value={email} 
								onChange={e => setEmail(e.target.value)} 
								type="email" 
								name="" 
								id="" 
								placeholder={"What's your work email?"} 
								className={"h-14 px-4 outline-none font-medium"} 
							/>
							<button 
								className={"flex items-center gap-2 bg-violet-700 hover:bg-violet-800 transition-colors px-5 m-[0.2rem] rounded-xl text-white"}
							>
								<i className="fa-regular fa-arrow-right"></i>
								<span className={"font-medium"}>Get Started</span>
							</button>
						</form>
						<span className={"text-[#9a91a1] font-medium text-base sm:text-lg"}>Need something immediately?</span>
						<button className={"flex items-center gap-3 rounded-xl py-3 px-5 font-semibold text-sm text-white bg-violet-700 hover:bg-violet-800 transition-colors w-fit"}>
							<span>Book your demo</span>
							<i className="fa-light fa-arrow-up-right text-xl"></i>
						</button>
					</div>
					<HorizontalScroll speed={1000} />
				</div>
			</Section>
			<Section id={"features"} showBlur={true}>
				<div className={"flex flex-col gap-20"}>
					<div className={"flex flex-col items-center justify-center gap-6 text-center"}>
						<div className={"flex items-center gap-2 bg-[#6c28d93a] py-1 px-3 rounded-md text-white"}>
							<div className={"w-[6px] h-[6px] rounded-full bg-white"}></div>
							<span>Features</span>
						</div>
						<h1 className={"title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium w-full lg:w-[900px]"}>Harness the Power of AI for Smarter Data Collection</h1>
						<span className={"text-[#9a91a1] font-medium text-base sm:text-lg"}>Skrapy is here to get you the most relevant data in the form you want!</span>
						<button className={"flex items-center gap-3 rounded-xl py-3 px-5 font-semibold text-sm text-white bg-violet-700 hover:bg-violet-800 transition-colors w-fit"}>
							<span>Join Waitlist</span>
						</button>
					</div>
					<div className={"flex flex-col gap-16 max-w-6xl mx-auto"}>
						<h5 className={"text-3xl font-medium text-center sm:text-left"}>All the features you’ll need</h5>
						<div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16"}>
							<div className={"flex flex-col gap-4 items-center sm:items-start"}>
								<div className={"grid place-content-center text-[#4dffd4] border border-[#4dffd4] bg-[#4dffd52a] w-12 h-12 rounded-xl"}>
									<i className="fa-light fa-lightbulb-on text-xl"></i>
								</div>
								<span className={"text-xl font-medium"}>Choose your format</span>
								<p className={"text-neutral-400 text-center sm:text-left"}>Just use your words to tell the agent the format you want.</p>
							</div>
							<div className={"flex flex-col gap-4 items-center sm:items-start"}>
								<div className={"grid place-content-center text-[#1c92ff] border border-[#1c92ff] bg-[#1c92ff2a] w-12 h-12 rounded-xl"}>
									<i className="fa-light fa-circle-dollar text-2xl"></i>
								</div>
								<span className={"text-xl font-medium"}>Structured Data Retrieval</span>
								<p className={"text-neutral-400 text-center sm:text-left"}>Got a file or website you want structured data from? We got you</p>
							</div>
							<div className={"flex flex-col gap-4 items-center sm:items-start"}>
								<div className={"grid place-content-center text-[#854dff] border border-[#854dff] bg-[#854dff2a] w-12 h-12 rounded-xl"}>
									<i className="fa-light fa-file-check text-2xl"></i>
								</div>
								<span className={"text-xl font-medium"}>Connect your database</span>
								<p className={"text-neutral-400 text-center sm:text-left"}>Monitor data where required and push changes to your database in realtime</p>
							</div>

							<div className={"flex flex-col gap-4 items-center sm:items-start"}>
								<div className={"grid place-content-center text-[#4dffd4] border border-[#4dffd4] bg-[#4dffd52a] w-12 h-12 rounded-xl"}>
									<i className="fa-light fa-lightbulb-on text-xl"></i>
								</div>
								<span className={"text-xl font-medium"}>No Code</span>
								<p className={"text-neutral-400 text-center sm:text-left"}>Just give your instructions in text and watch the agent do your work.</p>
							</div>
							<div className={"flex flex-col gap-4 items-center sm:items-start"}>
								<div className={"grid place-content-center text-[#1c92ff] border border-[#1c92ff] bg-[#1c92ff2a] w-12 h-12 rounded-xl"}>
									<i className="fa-light fa-circle-dollar text-2xl"></i>
								</div>
								<span className={"text-xl font-medium"}>Browser-in-Browser</span>
								<p className={"text-neutral-400 text-center sm:text-left"}>We don&apos;t save your credentials. Provide authentication directly to the website.</p>
							</div>
							<div className={"flex flex-col gap-4 items-center sm:items-start"}>
								<div className={"grid place-content-center text-[#854dff] border border-[#854dff] bg-[#854dff2a] w-12 h-12 rounded-xl"}>
									<i className="fa-light fa-file-check text-2xl"></i>
								</div>
								<span className={"text-xl font-medium"}>Visual Agents</span>
								<p className={"text-neutral-400 text-center sm:text-left"}>No backend functions or opaque API calls. Watch our agents in action - right in your browser.</p>
							</div>
						</div>
					</div>
					<div className={"flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-5 sm:px-8 lg:px-14 py-5 sm:py-10 lg:py-20 border border-neutral-800 rounded-2xl lg:max-w-7xl w-fit lg:w-full mx-auto"}>
						<div className={"flex flex-col items-center lg:items-start gap-10"}>
							<span className={"text-xl sm:text-2xl md:text-3xl lg:text-4xl title"}>Generate Leads</span>
							<span className={"text-xl sm:text-2xl md:text-3xl lg:text-4xl title"}>Build Foundational Models</span>
							<span className={"text-xl sm:text-2xl md:text-3xl lg:text-4xl title"}>Find the right recuits</span>
							<span className={"text-xl sm:text-2xl md:text-3xl lg:text-4xl title"}>Get your favourite listings</span>
							<span className={"text-xl sm:text-2xl md:text-3xl lg:text-4xl title"}>Do Market Research</span>
							<button className={"flex items-center gap-3 border rounded-xl py-2 px-4 border-neutral-700 hover:border-neutral-600 transition-colors w-fit"}>
								<span>Learn more</span>
								<i className="fa-light fa-arrow-up-right text-xl"></i>
							</button>
						</div>
						<div>
							<div className={"flex flex-col gap-10 border border-neutral-200 p-7 rounded-2xl w-[24rem]"}>
								<div className={"flex flex-col gap-2"}>
									<span className={"text-xl font-medium"}>New Leads</span>
									<div className={"h-3 w-36 bg-neutral-200 rounded-full"}></div>
								</div>
								<div className={"flex items-end justify-between"}>
									<div className={"flex flex-col"}>
										<span className={"text-5xl font-medium"}>472</span>
										<span className={"text-lg font-medium"}>New calls</span>
									</div>
									<div className={"flex flex-col items-end gap-2"}>
										<div className={"flex items-center gap-2"}>
											<span className={"text-xl font-medium text-violet-700"}>+156.10%</span>
											<i className="fa-solid fa-arrow-up-right text-lg"></i>
										</div>
										<div className={"h-3 w-[7rem] bg-neutral-200 rounded-full"}></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Section>
			<Section id={"faq"} showBlur={true}>
				<div className={"flex flex-col gap-20 max-w-4xl mx-auto relative"} style={{ zIndex: 3 }}>
					<div className={"flex flex-col items-center justify-center gap-6 text-center"}>
						<div className={"flex items-center gap-2 bg-[#6c28d93a] py-1 px-3 rounded-md text-white"}>
							<div className={"w-[6px] h-[6px] rounded-full bg-white"}></div>
							<span>FAQ</span>
						</div>
						<h1 className={"title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium w-full lg:w-[900px]"}>We&apos;ve all the answers</h1>
					</div>
					<div className={"flex flex-col gap-2"}>
						<FAQ
							title={"What is Pecunie"}
							description={"Skrapy is an AI-powered agent specifically designed for web data scraping at scale, helping businesses automate data collection from various online sources."}
						/>
						<FAQ
							title={"What is Pecunie"}
							description={"Skrapy is an AI-powered agent specifically designed for web data scraping at scale, helping businesses automate data collection from various online sources."}
						/>
						<FAQ
							title={"What is Pecunie"}
							description={"Skrapy is an AI-powered agent specifically designed for web data scraping at scale, helping businesses automate data collection from various online sources."}
						/>
						<FAQ
							title={"What is Pecunie"}
							description={"Skrapy is an AI-powered agent specifically designed for web data scraping at scale, helping businesses automate data collection from various online sources."}
						/>
						<FAQ
							title={"What is Pecunie"}
							description={"Skrapy is an AI-powered agent specifically designed for web data scraping at scale, helping businesses automate data collection from various online sources."}
						/>
						<FAQ
							title={"What is Pecunie"}
							description={"Skrapy is an AI-powered agent specifically designed for web data scraping at scale, helping businesses automate data collection from various online sources."}
						/>
					</div>
					<div className={"flex flex-col sm:flex-row items-center justify-center gap-2"}>
						<span className={"font-semibold text-lg"}>Still have more questions?</span>
						<button className={"flex items-center gap-3 border rounded-xl py-2 px-4 border-neutral-700 hover:border-neutral-600 transition-colors w-fit"}>
							<span>Contact Us</span>
						</button>
					</div>
				</div>
			</Section>
		</main>
	);
}

function HorizontalScroll({ speed = 5000 }) {
	const ref = useRef(null);
	const [animationState, setPlay] = useState("paused");
	useEffect(() => {
		if (ref.current) {
			setPlay("running");
		}
	}, []);

	return (
		<div className="horizontal-scroll-container">
			<h4 className={"title text-4xl font-medium"}>Usecases</h4>
			<div className={"w-[1920px]"}>
				<div
					className="horizontal-scroll"
					ref={ref}
					style={{
						animationPlayState: animationState
					}}
				>
					<div className={"horizontal-scroll-item text-xl"} style={{ "--speed": `${speed}ms` }}>Human Resources</div>
					<div className={"horizontal-scroll-item text-xl"} style={{ "--speed": `${speed}ms` }}>Lead Generation</div>
					<div className={"horizontal-scroll-item text-xl"} style={{ "--speed": `${speed}ms` }}>E-Commerce</div>
					<div className={"horizontal-scroll-item text-xl"} style={{ "--speed": `${speed}ms` }}>Market Research</div>
					<div className={"horizontal-scroll-item text-xl"} style={{ "--speed": `${speed}ms` }}>Content Aggregation</div>
					<div className={"horizontal-scroll-item text-xl"} style={{ "--speed": `${speed}ms` }}>ML Model Training</div>
				</div>
			</div>
			<div className={"horizontal-scroll-bg"}></div>
		</div>
	);
}

function FAQ({ title, description }) {

	const [showDesc, setShowDesc] = useState(false);
	const handleShowDesc = () => {
		setShowDesc(!showDesc);
	}

	return (
		<motion.div
		 	layout
			onClick={handleShowDesc}
			className={`faq ${showDesc ? 'show' : ''} flex flex-col gap-4 p-5 rounded-2xl cursor-pointer relative select-none`}
		>
			<div className={"flex items-center justify-between"}>
				<span className={"font-semibold text-lg"}>{title}</span>
				<AnimatePresence>
					{showDesc ? (
						<motion.i
							initial={{ opacity: 0, rotate: '-45deg' }}
							animate={{ opacity: 1, rotate: '45deg' }}
							exit={{ opacity: 0, rotate: '-45deg' }}
							className={`fa-regular fa-times text-xl absolute right-5`}
						></motion.i>
					) : null}
				</AnimatePresence>
				<AnimatePresence>
					{!showDesc ? (
						<motion.i
							initial={{ opacity: 0, rotate: '45deg' }}
							animate={{ opacity: 1, rotate: '-45deg' }}
							exit={{ opacity: 0, rotate: '45deg' }}
							className={`fa-regular fa-plus text-xl absolute right-5`}
						></motion.i>
					) : null}
				</AnimatePresence>
			</div>
			{showDesc ? (
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: .5 }}
					className={"text-[#9a91a1] font-medium"}
				>{description}</motion.p>
			) : null}
		</motion.div>
	)
}