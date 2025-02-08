import { Link } from "react-router-dom";

import { Button, Card } from "@/components/ui";

export default function NotFoundPage() {
	return (
		<div className="container flex h-screen w-screen items-center justify-center">
			<Card className="p-8">
				<h1 className="text-3xl mb-4">Page not found</h1>
				<p className="mb-4">
					Unfortunately, the page that you are looking for does not exist. 
				</p>
				<Button asChild>
					<Link to="/" replace>Go back to Home page</Link>
				</Button>			
			</Card>
		</div>
	)
}
