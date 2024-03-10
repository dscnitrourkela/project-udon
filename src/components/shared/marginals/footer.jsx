import footerData from '../../../data/footerData.js';
import { Heading, Paragraph } from '../typography/index.jsx';

export default function Footer() {
	return (
		<div className='w-full bg-[#1E1E1E] pb-[24px]'>
			<div className='w-[95%] mx-auto pt-[16px] pb-[24px] md:pb-[52px]' style={{ borderBottom: '1px solid white' }}>
				<div className='w-full flex justify-end'>
					<div className='h-[76px] w-[76px]'>
						<img src='https://res.cloudinary.com/dme9vltjf/image/upload/v1709728904/Star_e1ephq.png' alt='star' />
					</div>
				</div>
				<div className='flex lg:flex-row flex-col md:justify-between gap:[48px] lg:gap-[100px]'>
					<div className='mx-auto lg:mx-0 h-[174px] w-[174px] my-auto lg:pl-[24px]'>
						<img
							src='https://res.cloudinary.com/dme9vltjf/image/upload/v1697438367/Instagram_post_-_7_y5szxa.png'
							alt='logo'
						/>
					</div>
					<div className='flex md:flex-row flex-col items-center lg:items-start justify-center gap-[98px] lg:gap-[164px] lg:pr-[54px]'>
						<div className=''>
							<Heading
								variant='h3'
								className='text-primary-yellow pb-8 text-center md:text-start'
								style={{
									textShadow: ' 1.7px 1.7px 0px #FFF',
									WebkitTextStrokeWidth: 1,
									WebkitTextStrokeColor: '#252525',
								}}>
								{footerData.contact.title}
							</Heading>
							<Paragraph variant='body3' className='text-white text-center md:text-start'>
								{footerData.contact.desc}
							</Paragraph>
							<Paragraph variant='body3' className='pt-[12px] text-white text-center md:text-start'>
								Email: <span className='text-[#FF7647]'>{footerData.contact.email}</span>
							</Paragraph>
							<div className='flex justify-center md:justify-start gap-[26px] pt-[16px]'>
								{footerData.contact.socials.map(({ name, link, icon }) => (
									<a href={link} key={name}>
										<img src={icon} alt={name} />
									</a>
								))}
							</div>
						</div>
						<div>
							<Heading
								variant='h2'
								className='text-primary-yellow pb-8 text-center md:text-start'
								style={{
									textShadow: ' 1.7px 1.7px 0px #FFF',
									WebkitTextStrokeWidth: 1,
									WebkitTextStrokeColor: '#252525',
								}}>
								{footerData.links.title}
							</Heading>
							<div className='flex gap-[51px]'>
								<div className='flex flex-col gap-4 text-center md:text-start'>
									{footerData.links.links1.map(({ name, link }) => (
										<a href={link} key={name}>
											<Paragraph variant='body3' className='text-white'>
												{name}
											</Paragraph>
										</a>
									))}
								</div>
								<div className='flex flex-col gap-4 text-center md:text-start'>
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
