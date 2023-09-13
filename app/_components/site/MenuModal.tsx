import { settingsQuery, siteSettings } from "@/lib/sanity.queries";

import SanityImage from "@components/site/SanityImage";
import Footer from "@components/site/Footer";
import { componentParamsType } from "@/lib/types";

export async function MenuModal({ componentParams }: { componentParams: componentParamsType }) {
	const [client, preview, theme] = Object.values(componentParams);
	const settings: siteSettings = await client.fetch(settingsQuery)

	return (
		<div className="mt-[--total-header-height] absolute inset-0 w-full z-20 peer-checked:flex hidden md:main-padding
			after:fixed after:inset-0 after:bg-primary-accent after:-z-10 after:mt-[75px] after:opacity-70">

			<div className="flex flex-col h-screen w-full bg-gradient-to-br from-primary-bg to-secondary-bg shadow-md 
					md:mt-12 md:flex-row md:h-fit md:bg-gradient-to-r md:rounded-xl md:shadow-lg">
				<div className="border-b-2 px-6 py-6 sm:px-12 md:px-6 lg:px-12 md:border-b-0 md:border-r-2 border-secondary-accent z-10">
					<SanityImage
						image={settings.logo}
						alt={'Site logo'}
						width={'80px'}
						height={'auto'}
						preview={preview}
					/>
				</div>

				{/* {# RIGHT SIDE WRAPPER #} */}
				<div className="relative flex flex-col h-auto p-6 w-full px-6 sm:px-12">
					{/* {# NAVIGATION CONTAINER #} */}
					<div className="relative flex h-full flex-col md:flex-row justify-start md:items-center flex-wrap">
						{settings.title && <span className="leading-none font-black text-[25px] text-primary-text">{settings.title}</span>}
						<div className="pt-3">{ }</div>
					</div>
				</div>
			</div>

			<Footer client={client} theme={theme}/>

		</div>
	)
}

export default MenuModal