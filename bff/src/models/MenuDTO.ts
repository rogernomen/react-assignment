export interface MenuDTO {
	MenuId: number;
	MenuVersionNumber: number;
	VersionGuid: string;
	MenuSections: any[],
	MenuSectionBehaviour: number;
	DisplaySectionLinks: boolean;
	ConcessionStores: any[]
}
