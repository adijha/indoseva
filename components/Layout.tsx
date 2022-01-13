import Header from './Header'
import Footer from './Footer'

type Props = {
	children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }: Props) => {
	// max-w-fit
	return (
		<>
			<div className="mx-auto px-4">
				<Header />
				<hr />
				<main className="pt-4 pb-12">{children}</main>
				<Footer />
			</div>
		</>
	)
}

export default Layout
