import React, { SyntheticEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from '../../redux/auth.selector';
import { getCurrentUser } from '../../services/githubApi';
import './UserInfo.css';

type UserInfoProps = {
	onClick?: (e: SyntheticEvent) => void;
};

export default function UserInfo({ onClick }: UserInfoProps) {
	const [name, setName] = useState<string>();
	const [email, setEmail] = useState<string>();
	const [avatar, setAvatar] = useState<string>();
	const [error, setError] = useState<string>();
	const token = useSelector(selectToken);

	useEffect(() => {
		if (!token) {
			return;
		}
		getCurrentUser(token)
			.then(({ avatar_url: avatarUrl, email: userEmail, name: userName }) => {
				setAvatar(avatarUrl);
				setEmail(userEmail);
				setName(userName);
			})
			.catch(err => {
				console.error(err);
				setError(String(err));
			});
	}, [token]);

	return (
		<button className="UserInfo btn btn-light" onClick={onClick}>
			{avatar && (
				<div className="avatar-column">
					<div className="avatar" style={{ backgroundImage: `url(${avatar}` }}></div>
				</div>
			)}
			<div className="name-column">
				{name && <strong>{name}</strong>}
				{email && <a href={`mailto:${email}`}>{email}</a>}
			</div>
		</button>
	);
}
