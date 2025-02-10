import { memo, useState } from "react";

import { Search } from "lucide-react";
import { Button, Input, DateRangePicker, Stepper } from "@/components/ui";
import { DateRange } from "react-day-picker";

type ListingFiltersProps = {
	onChange: (filters: { dates?: DateRange, guests?: number, search?: string }) => void;
};

function ListingFilters({ onChange }: ListingFiltersProps) {
	const [dates, setDates] = useState<DateRange | undefined>(undefined);
	const [guests, setGuests] = useState<number | undefined>(1);
	const [search, setSearch] = useState<string | undefined>("");

	const handleSubmit = () => {
		onChange({ guests, search });
	};

	return (
		<div className="flex flex-row items-center justify-center gap-2">
			<Input 
				className="w-[400px]" 
				placeholder="Search destinations..." 
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<DateRangePicker 
				value={dates} 
				onChange={setDates} 
				placeholder="Select dates"
			/>
			<Stepper label="guest" value={guests} onChange={setGuests} />
			<Button onClick={handleSubmit}>
				<Search className="h-4 w-4"/>
			</Button>
		</div>
	)
}

export default memo(ListingFilters);