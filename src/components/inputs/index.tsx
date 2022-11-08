import { useState } from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types'
import input1Styles from './input1.module.css';
import input2Styles from './input2.module.css';
import input3Styles from './input3.module.css';
import input4Styles from './input4.module.css';
import input5Styles from './input5.module.css';

type InputProps = {
	type: string,
	name: string,
	id: string,
	placeholder: string,
	borderRadius: boolean,
	top: boolean;
}

type PasswordProps = {
	icon: IconName;
	iconType: IconPrefix;
	name: string,
	id: string,
	placeholder: string,
	borderRadius: boolean,
}

export const Input = ( { type, name, id, placeholder, borderRadius, top }: InputProps ) => {
	return (
		<>
			{borderRadius ?
				<>
					{top ?
						<div className={input1Styles.inputGroup}>
							<input type={type} name={name} id={id} placeholder=' ' className={input1Styles.input} />
							<span className={input1Styles.placeholder}>{placeholder}</span>
							<i className={input1Styles.inputBG}></i>
						</div>
					:
						<div className={input2Styles.inputGroup}>
							<input type={type} name={name} id={id} placeholder=' ' className={input2Styles.input} />
							<span className={input2Styles.placeholder}>{placeholder}</span>
							<i className={input2Styles.inputBG}></i>
						</div>
					}
				</>
			:
				<div className={input3Styles.inputGroup}>
					<input type={type} name={name} id={id} placeholder=' ' className={input3Styles.input} />
					<span className={input3Styles.placeholder}>{placeholder}</span>
					<i className={input3Styles.inputBG}></i>
				</div>
			}
		</>
		
	)
}

export const PasswordInput = ( { icon, iconType, name, id, placeholder, borderRadius }: PasswordProps ) => {

	const [passwordType, setPasswordType] = useState('password');
	const [passwordVisible, setPasswordVisible] = useState(false);
	const passwordView = () => {
		if (passwordVisible) {
			setPasswordType('password');
			setPasswordVisible(false);
		} else {
			setPasswordType('text');
			setPasswordVisible(true);
		}
	};
	
	return (
		<>
			{borderRadius ?
				<div className={input4Styles.inputGroup}>
					<div className={input4Styles.icon}>
						<Icon icon={[iconType, icon]} />
					</div>
					<input type={passwordType} name={name} id={id} placeholder=' ' className={input4Styles.input} />
					<span className={input4Styles.placeholder}>{placeholder}</span>
					<i className={input4Styles.inputBG}></i>
					<div className={input4Styles.eye}>
						{passwordVisible ?
							<Icon icon={['far', 'eye-slash']} onClick={passwordView}/>
						:
							<Icon icon={['far', 'eye']} onClick={passwordView}/>
						}
					</div>
				</div>
			:
				<div className={input5Styles.inputGroup}>
					<div className={input5Styles.icon}>
						<Icon icon={[iconType, icon]} />
					</div>
					<input type={passwordType} name={name} id={id} placeholder=' ' className={input5Styles.input} />
					<span className={input5Styles.placeholder}>{placeholder}</span>
					<i className={input5Styles.inputBG}></i>
					<div className={input5Styles.eye}>
						{passwordVisible ?
							<Icon icon={['far', 'eye-slash']} onClick={passwordView}/>
						:
							<Icon icon={['far', 'eye']} onClick={passwordView}/>
						}
					</div>
				</div>
			}
		</>
		
	)
}