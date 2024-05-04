export const initialContent = [
	{
		text: "Don't miss the 1999 Silver Jubilee event! Register now to secure your spot and confirm your registration by making a payment.",
		classes: 'mb-2',
	},
	{
		text: "We understand that plans can change. That's why we offer a full refund if you need to cancel your registration until September 30th.",
		classes: 'py-2 ',
	},
];

export const feeCoverage = [
	'Cultural and Entertainment activities for Dec 22nd and Dec 23rd.',
	'Food and non-alcoholic beverages for Dec 22nd evening through Dec 24th lunch.',
	'Stage setup, photography, party hall rental, music systems, orchestra, etc.',
	'Souvenirs and gifts for registered Alumni.',
	'Teacher felicitations, and other memorabilia.',
	'Registration kit which includes lanyard with name tag, ID card for NITR campus visit, goodie bag and event itinerary.',
	'Transportation and logistics to and from hotel to venue/NIT Rourkela from Dec 22nd through Dec 24th.',
];

export const donation =
	'Alumni donating/contributing more than ₹50,000 can pay "Individual Only (without family)" registration fee for their family registration and they do not need to pay "With Family (spouse + kids)" registration fee.';

export const STAGES = {
	STUDENT_FORM: 'Register',
	PAYMENT_STATUS: 'Paid',
	REGISTRATION_CLOSED: 'Registration Closed',
};

export const currentUser = {
	rollNumber: '',
	name: '',
	email: '',
	country: '',
	state: '',
	city: '',
	prefix: '',
	mobile: '',
	regType: '',
};

export const inputContent = [
	{
		key: 1,
		id: 'email',
		label: 'Email Address',
		type: 'email',
		regex: '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$',
		maxLength: 50,
		minLength: 3,
		placeholder: 'Enter your Email here',
		required: true,
	},
	{
		key: 2,
		id: 'recRollNumber',
		label: 'REC Roll Number',
		type: 'text',
		regex: '^[a-zA-Z0-9]+$',
		maxLength: 11,
		minLength: 7,
		placeholder: 'REC Roll Number (for Example: A4275)',
		required: true,
	},
	{
		key: 3,
		id: 'name',
		label: 'Name',
		type: 'text',
		regex: '^[a-zA-Z\\s]+$',
		maxLength: 50,
		minLength: 3,
		placeholder: 'Enter Your Name here',
		required: true,
	},
	{
		key: 4,
		id: ['country', 'state', 'city'],
		label: 'Let us know where you currently stay',
		type: ['text', 'text', 'text'],
		regex: '',
		minLength: [3, 3, 3],
		maxLength: [50, 50, 50],
		placeholder: ['Country', 'State', 'City'],
		required: true,
	},
	{
		key: 5,
		id: ['prefix', 'mobile'],
		label: 'Contact Number',
		type: ['string', 'number'],
		regex: ['^\\+?[0-9]*$', '^[0-9]{10}$'],
		maxLength: [4, 10],
		minLength: [1, 10],
		placeholder: ['Prefix +91', 'Enter your Phone number '],
		required: true,
	},
	{
		key: 6,
		id: 'profileImage',
		label: 'Upload your Image',
		type: 'file',
		regex: '',
		maxLength: 50,
		minLength: 3,
		placeholder: 'Upload your Image for Profile',
		required: false,
	},
];

export const branchOptions = [
	'CSE',
	'ECE',
	'ME',
	'CE',
	'EE',
	'MME',
	'CH',
	'BT',
	'Arch',
	'PHY',
	'CHEM',
	'MATH',
	'BM',
	'EC',
	'MBA',
	'EI',
	'CR',
	'PHD',
	'OTHERS',
].sort();
export const registrationOptions = ['With Family', 'Individual (without family)'];

export const lastPartContent = [
	'The "Individual Only (without family)" and "With Family (spouse + kids)" registration fee is discounted by about 60% to allow increase in attendance - for example, the cost of Individual Only (without family) is about ₹50,000, while it is being offered at a discounted rate of ₹23,000. ',
	'Please contribute generously',
	'and as per your capabilities so that we can successfully bridge the gap between the registration fee and expense.',
];
