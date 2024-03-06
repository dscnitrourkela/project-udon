import footerData from '../../../data/footerData.js';
import { Heading, Paragraph } from '../typography/index.jsx';

export default function Footer() {
	return (
		<div className='w-full h-[475px] bg-[#1E1E1E]'>
			<div className='w-[95%] mx-auto md:pt-[16px] md:pb-[52px]' style={{ borderBottom: '1px solid white' }}>
				<div className='w-full flex justify-end'>
					<div className='h-[76px] w-[76px]'>
						<img src='https://res.cloudinary.com/dme9vltjf/image/upload/v1709728904/Star_e1ephq.png' alt='star' />
					</div>
				</div>
				<div className='flex md:flex-row flex-col md:justify-between'>
					<div className='h-[174px] w-[174px] md:my-auto md:pl-[24px]'>
						<img
							src='https://res.cloudinary.com/dme9vltjf/image/upload/v1697438367/Instagram_post_-_7_y5szxa.png'
							alt='logo'
						/>
					</div>
					<div className='flex gap-[164px] pr-[54px]'>
						<div className=''>
							<Heading
								variant='h3'
								className='text-primary-yellow pb-8'
								style={{
									textShadow: ' 1.7px 1.7px 0px #FFF',
									WebkitTextStrokeWidth: 1,
									WebkitTextStrokeColor: '#252525',
								}}>
								{footerData.contact.title}
							</Heading>
							<Paragraph variant='body3' className='text-white'>
								{footerData.contact.desc}
							</Paragraph>
							<Paragraph variant='body3' className='pt-[12px] text-white'>
								Email: <span className='text-[#FF7647]'>{footerData.contact.email}</span>
							</Paragraph>
							<div className='flex gap-[26px] pt-[16px]'>
								{footerData.contact.socials.map(({ name, link, icon }) => (
									<a href={link} key={name}>
										<img src={icon} alt={name} />
									</a>
								))}
							</div>
						</div>
						<div className>
							<Heading
								variant='h2'
								className='text-primary-yellow pb-8'
								style={{
									textShadow: ' 1.7px 1.7px 0px #FFF',
									WebkitTextStrokeWidth: 1,
									WebkitTextStrokeColor: '#252525',
								}}>
								{footerData.links.title}
							</Heading>
							<div className='flex gap-[51px]'>
								<div className='flex flex-col gap-4'>
									{footerData.links.links1.map(({ name, link }) => (
										<a href={link} key={name}>
											<Paragraph variant='body3' className='text-white'>
												{name}
											</Paragraph>
										</a>
									))}
								</div>
								<div className='flex flex-col gap-4'>
									{footerData.links.links2.map(({ name, link }) => (
										<a href={link} key={name}>
											<Paragraph variant='body3' className='text-white'>
												{name}
											</Paragraph>
										</a>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
