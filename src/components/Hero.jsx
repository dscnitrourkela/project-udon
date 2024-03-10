import styled from 'styled-components';

const Container = styled.div`
	position: relative;
`;

const RightContainer = styled.div`
	position: relative;
	left: 310px;
	background-color: #000;
`;
const LeftContainer = styled.div`
	position: relative;
	left: 310px;
	background-color: #000;
`;

const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 20px;
	@media (max-width: 768px) {
		position: relative;
		top: 600px;
		right: 120px;
		justify-content: center;
		align-items: center;
	}
`;

const MiddleCard = styled.div`
	position: absolute;
	top: 40px;
	left: 50%;
	transform: translateX(-50%);
	z-index: 2;
	height: 514px;
	width: 388px;
	display: inline-flex;
	padding: 13.598px 10.985px 37.528px 12.393px;
	flex-direction: column;
	align-items: flex-end;
	gap: 19.211px;
	border-radius: 6px;
	border: 1px solid #000;
	background: #fff;
	box-shadow: 2px 3px 0px 0px #000;
`;

const LeftCard = styled.div`
	position: absolute;
	top: 50px;
	left: 20%;
	transform: translateX(-50%);
	z-index: 1;
	display: flex;
	width: 353px;
	height: 473px;
	transform: rotate(-7.121deg);
	padding: 12.362px 11.072px 73.456px 11.266px;
	flex-direction: column;
	align-items: center;
	border-radius: 6px;
	border: 1px solid #000;
	background: #fff;
	box-shadow: 2px 2px 0px 0px #000;
	@media (max-width: 768px) {
		//left: -40%;
		transform: rotate(-20deg);
		position: absolute;
		left: -170px;
	}
	@media (min-height: 1024px) {
		left: -10%;
		transform: rotate(-20deg);
	}

	@media (max-width: 1024px) and (min-width: 768px) {
		position: absolute;
		left: -80px;
		top: 80px;
		transform: rotate(-20deg);
	}
	@media (max-width: 1024px) and (min-width: 768px) {
		top: 80px;
		left: 80px;
		transform: rotate(-10deg);
	}
`;

const RightCard = styled.div`
	position: absolute;
	top: 80px;
	left: 50%;
	transform: translateX(-50%);
	z-index: 1;
	width: 303.075px;
	height: 404.558px;
	display: flex;
	flex-shrink: 0;
	transform: rotate(15.801deg);
	padding: 12.362px 11.072px 73.456px 11.266px;
	flex-direction: column;
	align-items: center;
	border-radius: 6px;
	border: 1px solid #000;
	background: #fff;
	box-shadow: 2px 2px 0px 0px #000;
`;

const InnerComponentMiddle = styled.div`
	width: 363.835px;
	height: 426.663px;
	border-radius: 4px;
	background:
		url('https://res.cloudinary.com/dkpdi1wek/image/upload/v1709662676/1_l7wivq.jpg'),
		lightgray 50% / cover no-repeat;
	background-position: 20px left 20px top;
`;

const InnerComponentRight = styled.div`
	width: 283.9px;
	height: 332.925px;
	border-radius: 4px;
	background:
		url('https://res.cloudinary.com/dkpdi1wek/image/upload/v1709662873/right_guw2gk.jpg'),
		lightgray 50% / cover no-repeat;
	background-position: -25px center;
`;

const InnerComponentLeft = styled.div`
	width: 330.744px;
	height: 387.858px;
	border-radius: 4px;
	background:
		url('https://res.cloudinary.com/dkpdi1wek/image/upload/v1709662790/left_vv4m1m.jpg'),
		lightgray 50% / cover no-repeat;
`;

const SVGWrapper = styled.div`
	position: absolute;
	z-index: 3;
	top: -14px;
	right: 32%;
	width: 110.226px;
	height: 110.226px;
	transform: rotate(-90.062deg);
	@media (max-width: 768px) {
		position: absolute;
		right: 40px;
		top: 585px;
		transform: rotate(0deg);
	}
	@media (min-height: 1024px) {
		position: absolute;
		right: 230px;
		top: 585px;
		transform: rotate(0deg);
	}
	@media (max-width: 1024px) and (min-width: 768px) {
		right: 230px;
	}
`;

const ButtonContainer = styled.div`
	position: absolute;
	top: 444.94px;
	left: 20px;
	margin-top: 40px;
`;

const Button = styled.button`
	width: 179px;
	height: 48px;
	display: inline-flex;
	padding: 12px 16px;
	justify-content: center;
	align-items: center;
	gap: 10px;
	border-radius: 8px;
	border: 1px solid #000;
	background: #ff7647;
	box-shadow:
		2px 2px 0px 0px #000,
		3px 4px 9.2px 0px rgba(222, 222, 222, 0.48) inset;
	font-size: 20px;
	font-family: Syne;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	color: #272727;
	cursor: pointer;
	outline: none;
	transition:
		background-color 0.3s,
		box-shadow 0.3s;

	&:hover {
		background-color: #ff975f;
		box-shadow:
			2px 2px 0px 0px #000,
			3px 4px 9.2px 0px rgba(222, 222, 222, 0.48) inset,
			0px 0px 10px 0px rgba(0, 0, 0, 0.2);
	}

	&:active {
		transform: translateY(1px);
	}
`;

const WelcomeContainer = styled.div`
	position: absolute;
	top: 40px;
	left: 20px;
`;

const WelcomeFamily = styled.h1`
	color: #ff4409;
	position: absolute;
	top: 118px;
	left: -295px;
	font-family: 'Syne';
	font-size: 26px;
	font-style: normal;
	font-weight: bold;
	line-height: normal;
`;
const HeroTextContainer = styled.div`
	width: 642.613px;
	color: #111;
	position: absolute;
	top: 180px;
	left: -295px;
`;

const HeroText1 = styled.div`
	font-family: Syne;
	font-size: 75px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	letter-spacing: 3.75px;
	color: #111;
	@media (max-width: 1024px) and (min-width: 768px) {
		font-size: 50px;
		padding: 40px 0;
	}
`;

const Batch = styled.span`
	color: #0e0e0e;
	font-family: Gotham;
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 0.9px;
`;

const Year = styled.span`
	color: #0e0e0e;
	font-family: Gotham;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 0.8px;
`;

const BatchInfo = styled.div`
	position: absolute;
	bottom: 10px;
	right: 10px;
`;

const Hero = () => {
	return (
		<Container>
			<RightContainer>
				<CardContainer>
					<LeftCard>
						<InnerComponentLeft />
					</LeftCard>
					<MiddleCard>
						<InnerComponentMiddle />
						<BatchInfo>
							<Batch>Batch:</Batch>
							<Year>1999</Year>
						</BatchInfo>
					</MiddleCard>
					<RightCard>
						<InnerComponentRight />
					</RightCard>
				</CardContainer>
				<SVGWrapper>
					<svg xmlns='http://www.w3.org/2000/svg' width='111' height='111' viewBox='0 0 111 111' fill='none'>
						<path
							d='M1.4381 56.106C1.43808 56.106 1.43806 56.106 1.43804 56.106C0.401629 55.984 0.399996 54.4803 1.43614 54.3561C1.43616 54.3561 1.43618 54.3561 1.4362 54.3561L16.0482 52.6062C35.1916 50.3137 50.2703 35.2022 52.5212 16.054L54.2394 1.43818C54.3613 0.401548 55.8651 0.399915 55.9893 1.43633L57.7391 16.0483C60.0317 35.1916 75.1432 50.2703 94.2914 52.5212L108.907 54.2393C109.944 54.3613 109.945 55.865 108.909 55.9892L94.297 57.7391C75.1538 60.0316 60.0751 75.1431 57.8241 94.2915L56.106 108.907C56.106 108.907 56.106 108.907 56.106 108.907C55.984 109.944 54.4804 109.945 54.3561 108.909C54.3561 108.909 54.3561 108.909 54.3561 108.909L52.6062 94.2972C50.3137 75.1537 35.2022 60.075 16.0539 57.8241L1.4381 56.106Z'
							fill='#FFE500'
							stroke='black'
							//stroke-width='1.2'
						/>
					</svg>
				</SVGWrapper>
			</RightContainer>

			<ButtonContainer>
				<Button>Register Now</Button>
			</ButtonContainer>
			<LeftContainer>
				<WelcomeContainer>
					<WelcomeFamily>Welcome family...</WelcomeFamily>
				</WelcomeContainer>
				<HeroTextContainer>
					<HeroText1>Lorem Ipsum Dolar sit Amet luyto</HeroText1>
				</HeroTextContainer>
			</LeftContainer>
		</Container>
	);
};

export default Hero;
