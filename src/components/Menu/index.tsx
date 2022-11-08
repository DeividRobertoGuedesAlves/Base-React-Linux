import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types';
import { MenuItem } from '../MenuItem';
import styles from './styles.module.css';

export const Menu = () => {

	return (
		<div className={styles.sideBar}>
			<div className={styles.sideBarHeader}>
				<h2>Painel de Control</h2>
			</div>
			<div className={styles.sideBarBody}>
				<ul className={styles.menu}>
					<MenuItem icon='house' iconType='fas' active={true} name='Inicio' />
					<MenuItem icon='user' iconType='fas' active={false} name='Usuários' />
					<MenuItem icon='gear' iconType='fas' active={false} name='Configurações' />
				</ul>
			</div>
		</div>
	);
}