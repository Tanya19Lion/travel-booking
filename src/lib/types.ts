
export type Theme = 'light' | 'dark' | 'system';
export type TThemeContext = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

export type User = {
    avatarUrl: string;
    bio: string;
    email: string;
    firstName: string;
    id: number;
    initials: string;
    lastName: string
    password: string;
};
export type UserExtended = User & { createdAt: Date; modifiedAt: Date; };   

export type Listing = {
    id: number;
    name: string;
    description: string;
    locationId: number;
    images: string[];
    price: number;
    maxGuests: number;
    guestFavorite: boolean;
    rating: number;
    availability: {
        from: Date,
        to: Date,
    },
}
export type ListingExtended = Listing & { createdAt: Date; modifiedAt: Date; };

export type Location = {
    id: number;
    name: string;
    country: string;
}
export type LocationExtended = Location & { createdAt: Date; modifiedAt: Date; };
