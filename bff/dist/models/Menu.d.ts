export interface MenuItem {
    actualPrice: number;
    alcohol: boolean;
    cellAspectRatio: number;
    cellLayoutType: number;
    dailySpecialHours: [];
    description: string;
    disableVouchers: boolean;
    displayOrder: number;
    excludeFromVoucherDiscounting: boolean;
    imageName: string;
    imageUrl: string;
    isAvailable: boolean;
    isDeleted: boolean;
    menuItemId: number;
    menuItemMetadata: [];
    menuItemOptionSets: [];
    menuSectionId: number;
    name: string;
    price: number;
    priceCanIncrease: boolean;
    publicId: string;
    spicinessRating: number;
    tags: [];
    taxRate: null;
    taxRateId: null;
    taxValue: number;
}
export interface MenuSection {
    cellAspectRatio: number;
    cellLayoutType: number;
    concessionStoreId: string | null;
    description: string | null;
    displayOrder: number;
    imageName: string;
    imageUrl: string;
    isAvailable: boolean;
    isDeleted: boolean;
    isHiddenFromUsers: boolean;
    menuItems: MenuItem[];
    menuSectionAvailability: {
        availableTimes: [];
        menuSectionId: number;
        availabilityMode: number;
    };
    menuSectionId: number;
    menuSectionMetadata: [];
    name: string;
    publicId: string | null;
}
export interface Menu {
    menuId: number;
    menuVersionNumber: number;
    versionGuid: string;
    menuSections: Array<MenuSection>;
    menuSectionBehaviour: number;
    displaySectionLinks: boolean;
    concessionStores: [];
}
