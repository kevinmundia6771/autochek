export interface BrandProps {
	id?: number;
	name: string;
	imageUrl: string;
}

export interface DataProps {
	makeList: BrandProps[];
	pagination: Pagination;
}
export interface Pagination {
	currentPage: number;
	pageSize: number;
	total: number;
}

export interface CarProps {
	result: Car[];
	pagination: Pagination;
}

export interface Car {
	id: string;
	title: string;
	imageUrl: string;
	year: number;
	city: string;
	state: string;
	sellingCondition: string;
	hasWarranty: boolean;
	marketplacePrice: number;
	marketplaceOldPrice: number;
	hasFinancing: boolean;
	mileage: number;
	mileageUnit: string;
	installment: number;
	depositReceived: boolean;
	loanValue: number;
	websiteUrl: string;
	stats: Stats;
	bodyTypeId: string;
	sold: boolean;
	hasThreeDImage: boolean;
	transmission: string;
	fuelType: string;
	marketplaceVisibleDate: string;
	ccMeasurement: number;
}

export interface Stats {
	webViewCount: number;
	webViewerCount: number;
	interestCount: number;
	testDriveCount: number;
	appViewCount: number;
	appViewerCount: number;
	processedLoanCount: number;
}

// car media types
export interface CarMedia {
	carMediaList: CarMediaList[];
	pagination: Pagination;
}

export interface CarMediaList {
	id: number;
	name: string;
	url: string;
	createdAt: string;
	type: MediaType;
}

export type MediaType = 'image/jpeg' | 'video/mp4' | 'image';
