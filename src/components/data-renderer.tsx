import { Spinner } from './ui';

type DataRendererProps = {
	isLoading: boolean;
	error: string | null;
	children: React.ReactNode;
};

export default function DataRenderer({ children, isLoading, error }: DataRendererProps) {
	if (isLoading) {
		return (
			<div className="flex justify-center items-center h-64">
				<Spinner size="lg" />
			</div>
		);
	} 

	if (error) {
		return (
			<div className="text-center">
				<p className="text-red-500">{error}</p>
			</div>
		);
	}
	
	return children;
}
