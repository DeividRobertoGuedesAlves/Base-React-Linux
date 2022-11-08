import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types';
import { MenuItemType } from '../../types/MenuItem';
import styles from './styles.module.css';

type Props = {
	icon: IconName,
	iconType: IconPrefix,
	active: boolean,
	name: string,
}

export const MenuItem = ( { icon, iconType, active, name }: Props) => {
	return (
		<>
			{active ?
				<li className={styles.menuItemActive}>
					<div className={styles.icon}>
						<Icon icon={[iconType, icon]} />
					</div>
					<div className={styles.itemBody}>
						<span>{name}</span>
					</div>
				</li>
			:
				<li className={styles.menuItem}>
					<div className={styles.icon}>
						<Icon icon={[iconType, icon]} />
					</div>
					<div className={styles.itemBody}>
						<span>{name}</span>
					</div>
				</li>
			}
		</>
	);
}