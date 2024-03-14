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

export const STAGES = {
	TYPE_OF_USER: 'Are you an NITR Student?',
	STUDENT_FORM: 'Register',
	REGISTRATION_CLOSED: 'Registration Closed',
};

export const INIT_STATE = {
	value: '',
	errorVisibility: false,
	errorMessage: '',
};

export const currentUser = {
	rollNumber: '',
	name: '',
	email: '',
	country: '',
	state: '',
	city: '',
	prefix: '',
	phoneNumber: '',
	regType: '',
};

export const inputContent = [
	{
		id: 'recRollNumber',
		label: 'REC Roll Number',
		type: 'text',
		regex: '^d{3}[a-zA-Z]{2}d{4}$',
		maxLength: 11,
		minLength: 7,
		placeholder: 'REC Roll Number (for Example: A4275)',
	},
	{
		id: 'name',
		label: 'Name',
		type: 'text',
		regex: '^[a-zA-Z]+$',
		maxLength: 50,
		minLength: 3,
		placeholder: 'Enter Your Name here',
	},
	{
		id: 'email',
		label: 'Email Address',
		type: 'email',
		regex: '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$',
		maxLength: 50,
		minLength: 3,
		placeholder: 'Enter your Email here',
	},
	{
		id: ['country', 'state', 'city'],
		label: 'Let us know where you currently stay',
		type: ['text', 'text', 'text'],
		regex: '',
		minLength: [3, 3, 3],
		maxLength: [50, 50, 50],
		placeholder: ['Country', 'State', 'City'],
	},
	{
		id: ['prefix', 'phoneNumber'],
		label: 'Contact Number',
		type: ['number', 'number'],
		regex: ['^+?d{1,3}', '^[0-9]{10}$'],
		maxLength: [4, 10],
		minLength: [1, 10],
		placeholder: ['Prefix +91', 'Enter your Phone number here'],
	},
];

export const lastPartContent =
	'The "Individual Only (without family)" and "With Family (spouse + kids)" registration fee is discounted by about 60% to allow increase in attendance - for example, the cost of Individual Only (without family) is about ₹50,000, while it is being offered at a discounted rate of ₹23,000. Please contribute generously and as per your capabilities so that we can successfully bridge the gap between the registration fee and expense.';
