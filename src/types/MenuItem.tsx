import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types';

export type MenuItemType = {
	icon: IconName,
	iconType: IconPrefix,
	active: boolean,
	name: string,
}