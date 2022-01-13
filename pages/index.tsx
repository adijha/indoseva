import type { NextPage, GetStaticProps } from 'next'

import Link from 'next/link'

// props type
type Props = {
	posts: String
}

const Home: NextPage<Props> = ({ posts }: Props) => {
	return (
		<div>
			<section className="text-gray-600 body-font">
				<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
					<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
						<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
							Before they sold out
							<br className="hidden lg:inline-block" />
							readymade gluten
						</h1>
						<p className="mb-8 leading-relaxed">
							Copper mug try-hard pitchfork pour-over freegan heirloom neutra
							air plant cold-pressed tacos poke beard tote bag. Heirloom echo
							park mlkshk tote bag selvage hot chicken authentic tumeric
							truffaut hexagon try-hard chambray.
						</p>
						<div className="flex justify-center">
							<button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
								Button
							</button>
							<button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
								Button
							</button>
						</div>
					</div>
					<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
						<img
							className="object-cover object-center rounded"
							alt="hero"
							src="https://dummyimage.com/720x600"
						/>
					</div>
				</div>
			</section>
			<br />
			<section className="text-gray-600 body-font">
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-col">
						<div className="h-1 bg-gray-200 rounded overflow-hidden">
							<div className="w-24 h-full bg-indigo-500" />
						</div>
						<div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
							<h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
								Space The Final Frontier
							</h1>
							<p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
								Street art subway tile salvia four dollar toast bitters selfies
								quinoa yuccie synth meditation iPhone intelligentsia prism tofu.
								Viral gochujang bitters dreamcatcher.
							</p>
						</div>
					</div>
					<div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
						<div className="p-4 md:w-1/3 sm:mb-0 mb-6">
							<div className="rounded-lg h-64 overflow-hidden">
								<img
									alt="content"
									className="object-cover object-center h-full w-full"
									src="https://dummyimage.com/1203x503"
								/>
							</div>
							<h2 className="text-xl font-medium title-font text-gray-900 mt-5">
								Shooting Stars
							</h2>
							<p className="text-base leading-relaxed mt-2">
								Swag shoivdigoitch literally meditation subway tile tumblr
								cold-pressed. Gastropub street art beard dreamcatcher neutra,
								ethical XOXO lumbersexual.
							</p>
							<a className="text-indigo-500 inline-flex items-center mt-3">
								Learn More
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									className="w-4 h-4 ml-2"
									viewBox="0 0 24 24"
								>
									<path d="M5 12h14M12 5l7 7-7 7" />
								</svg>
							</a>
						</div>
						<div className="p-4 md:w-1/3 sm:mb-0 mb-6">
							<div className="rounded-lg h-64 overflow-hidden">
								<img
									alt="content"
									className="object-cover object-center h-full w-full"
									src="https://dummyimage.com/1204x504"
								/>
							</div>
							<h2 className="text-xl font-medium title-font text-gray-900 mt-5">
								The Catalyzer
							</h2>
							<p className="text-base leading-relaxed mt-2">
								Swag shoivdigoitch literally meditation subway tile tumblr
								cold-pressed. Gastropub street art beard dreamcatcher neutra,
								ethical XOXO lumbersexual.
							</p>
							<a className="text-indigo-500 inline-flex items-center mt-3">
								Learn More
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									className="w-4 h-4 ml-2"
									viewBox="0 0 24 24"
								>
									<path d="M5 12h14M12 5l7 7-7 7" />
								</svg>
							</a>
						</div>
						<div className="p-4 md:w-1/3 sm:mb-0 mb-6">
							<div className="rounded-lg h-64 overflow-hidden">
								<img
									alt="content"
									className="object-cover object-center h-full w-full"
									src="https://dummyimage.com/1205x505"
								/>
							</div>
							<h2 className="text-xl font-medium title-font text-gray-900 mt-5">
								The 400 Blows
							</h2>
							<p className="text-base leading-relaxed mt-2">
								Swag shoivdigoitch literally meditation subway tile tumblr
								cold-pressed. Gastropub street art beard dreamcatcher neutra,
								ethical XOXO lumbersexual.
							</p>
							<a className="text-indigo-500 inline-flex items-center mt-3">
								Learn More
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									className="w-4 h-4 ml-2"
									viewBox="0 0 24 24"
								>
									<path d="M5 12h14M12 5l7 7-7 7" />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</section>

			<section className="text-gray-600 body-font">
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-col text-center w-full mb-12">
						<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
							Master Cleanse Reliac Heirloom
						</h1>
						<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
							Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
							gentrify, subway tile poke farm-to-table. Franzen you probably
							haven't heard of them man bun deep.
						</p>
					</div>
					<div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
						<div className="relative flex-grow w-full">
							<label
								htmlFor="full-name"
								className="leading-7 text-sm text-gray-600"
							>
								Full Name
							</label>
							<input
								type="text"
								id="full-name"
								name="full-name"
								className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							/>
						</div>
						<div className="relative flex-grow w-full">
							<label
								htmlFor="email"
								className="leading-7 text-sm text-gray-600"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							/>
						</div>
						<button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
							Button
						</button>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Home
