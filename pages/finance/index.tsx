// import Image from 'next/image'
import type { NextPage, GetStaticProps } from 'next'
import { IPost } from '../../types/post'
import Link from 'next/link'
import { getAllPosts } from '../../utils/mdxUtils'
import Thumbnail from '../../components/Thumbnail'

// props type
type Props = {
	posts: [IPost]
}

// component render function
const Blog: NextPage<Props> = ({ posts }: Props) => {
	return (
		<section className="text-gray-600 body-font">
			<div className="container px-5 py-24 mx-auto">
				<div className="flex flex-wrap -m-4">
					{posts.map((post) => (
						<div className="p-4 md:w-1/3" key={post.slug}>
							<div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
								<Thumbnail
									title={post.title}
									className="lg:h-48 md:h-36 w-full object-cover object-center"
									src={post.thumbnail}
								/>

								<div className="p-6">
									<h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
										{post.category}
									</h2>
									<h1 className="title-font text-lg font-medium text-gray-900 mb-3">
										{/* The Catalyzer */}
										{post.title}
									</h1>
									<p className="leading-relaxed mb-3">
										{post.description}
										{/* Photo booth fam kinfolk cold-pressed sriracha leggings
										jianbing microdosing tousled waistcoat. */}
									</p>
									<div className="flex items-center flex-wrap ">
										<Link href={`/finance/${post.slug}`}>
											<a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
												Learn More
												<svg
													className="w-4 h-4 ml-2"
													viewBox="0 0 24 24"
													stroke="currentColor"
													strokeWidth={2}
													fill="none"
													strokeLinecap="round"
													strokeLinejoin="round"
												>
													<path d="M5 12h14" />
													<path d="M12 5l7 7-7 7" />
												</svg>
											</a>
										</Link>
										<span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
											<svg
												className="w-4 h-4 mr-1"
												stroke="currentColor"
												strokeWidth={2}
												fill="none"
												strokeLinecap="round"
												strokeLinejoin="round"
												viewBox="0 0 24 24"
											>
												<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
												<circle cx={12} cy={12} r={3} />
											</svg>
											1.2K
										</span>
										<span className="text-gray-400 inline-flex items-center leading-none text-sm">
											<svg
												className="w-4 h-4 mr-1"
												stroke="currentColor"
												strokeWidth={2}
												fill="none"
												strokeLinecap="round"
												strokeLinejoin="round"
												viewBox="0 0 24 24"
											>
												<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
											</svg>
											6
										</span>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Blog

// get posts from serverside at build time
export const getStaticProps: GetStaticProps = async () => {
	const posts = getAllPosts([
		'title',
		'slug',
		'date',
		'description',
		'thumbnail',
		'category',
	])

	// retunr the posts props
	return { props: { posts } }
}
