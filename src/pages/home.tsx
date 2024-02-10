import { ModeToggle } from '@/components/mode-switch';
import { Button } from '@/components/ui/button';

export default function Home() {
	return (
		<div className='container'>
			<ModeToggle />
			<Button>Click me</Button>
		</div>
	);
}
