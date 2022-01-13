import { serialize } from 'next-mdx-remote/serialize'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useEffect } from 'react'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

import { useMdxComponentsContext } from '../../context/mdxContext'
import Thumbnail from '../../components/Thumbnail'
import { IPost } from '../../types/post'
import { getTechPost, getTechPosts } from '../../utils/mdxUtils'
import Prerequisites from '../../components/Prerequisites'
import { ParsedUrlQuery } from 'querystring'
import Stacks from '../../components/Stacks'

// props type
type Props = {
	source: MDXRemoteSerializeResult
	frontMatter: Omit<IPost, 'slug'>
}

// components to render
const components = {
	Prerequisites,
	Stacks,
}

const PostPage: React.FC<Props> = ({ source, frontMatter }: Props) => {
	// get setters
	const { setPrerequisites, setStacks } = useMdxComponentsContext()

	useEffect(() => {
		// set prerequisites
		setPrerequisites(frontMatter.prerequisites)
		// set stacks
		setStacks(frontMatter.stacks)
	}, [
		setPrerequisites,
		setStacks,
		frontMatter.prerequisites,
		frontMatter.stacks,
	])

	return (
		<div className="flex justify-center">
			<article className="prose prose-green">
				<div className="mb-4">
					<Thumbnail title={frontMatter.title} src={frontMatter.thumbnail} />
				</div>

				<h1>{frontMatter.title}</h1>

				<p>{frontMatter.description}</p>

				<MDXRemote components={components} {...source} />
			</article>
			{/* <section className="text-gray-600 body-font text-left">
				<div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col text-left">
					<Thumbnail
						className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
						title={frontMatter.title}
						src={frontMatter.thumbnail}
					/>
					 <img
						className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
						alt="hero"
						src="https://dummyimage.com/720x600"
					/> 
					<div className="text-center lg:w-2/3 w-full">
						<h1 className="title-font sm:text-4xl text-3xl mb-4 mt-10 font-medium text-gray-900 text-left">
							{frontMatter.title}
						</h1>
						<p className="mb-8 leading-relaxed text-left">
							{frontMatter.description}
						</p>
						<MDXRemote components={components} {...source} />

						<div className="flex justify-center">
							<button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
								Button
							</button>
							<button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
								Button
							</button>
						</div>
					</div>
				</div>
			</section> */}
		</div>
	)
}

export default PostPage

interface Iparams extends ParsedUrlQuery {
	slug: string
}

export const getStaticProps: GetStaticProps = async (context) => {
	const { slug } = context.params as Iparams
	// get the slug
	const { content, data } = getTechPost(slug)
	// serialize the data on the server side
	const mdxSource = await serialize(content, { scope: data })
	return {
		props: {
			source: mdxSource,
			frontMatter: data,
		},
	}
}

export const getStaticPaths: GetStaticPaths = () => {
	//only get the slug from posts
	const posts = getTechPosts(['slug'])

	// map through to return post paths
	const paths = posts.map((post) => ({
		params: {
			slug: post.slug,
		},
	}))

	return {
		paths,
		fallback: false,
	}
}
