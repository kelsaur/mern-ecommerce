type FooterLinks = {
	[section: string]: string[];
};

type SocialLinks = string[];

const Footer = () => {
	const footerLinks: FooterLinks = {
		Shop: ["Men", "Women", "Kids", "New In"],
		About: ["Our Story", "Careers", "Sustainability", "Press"],
		Help: ["FAQ", "Shipping & Returns", "Contact", "Size Guide"],
	};

	const socialLinks: SocialLinks = ["Facebook", "Instagram", "Youtube"];

	return (
		<footer className="bg-gray-100 text-1 mt-12">
			<div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
				{/* footer links */}
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{Object.entries(footerLinks).map(([section, links]) => (
						<div key={section}>
							<h3 className="text-lg font-semibold mb-4">{section}</h3>
							<ul className="space-y-2">
								{links.map((link) => (
									<li key={link}>
										<a href="#" className="hover-1">
											{link}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}

					{/* newsletter & social */}
					<div>
						<h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
						<p className="mb-4 text-sm">
							Subscribe to our newsletter for latest offers.
						</p>
						<form className="flex mb-4 md:flex-col">
							<input
								type="email"
								placeholder="Your email"
								className="input-1 border w-full px-3 py-2 rounded-l-md md:rounded-t-md md:rounded-bl-none"
							/>
							<button className="button-1 rounded-r-md md:rounded-b-md md:rounded-tr-none">
								Subscribe
							</button>
						</form>

						<div className="flex gap-4 md:flex-col lg:flex-row">
							{socialLinks.map((social) => (
								<a key={social} href="#" className="hover-1">
									{social}
								</a>
							))}
						</div>
					</div>
				</div>

				{/* copyright */}
				<div className="mt-12 border-t border-gray-300 pt-6 text-center text-sm text-gray-500">
					&copy; {new Date().getFullYear()} LUMI. All rights reserved.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
