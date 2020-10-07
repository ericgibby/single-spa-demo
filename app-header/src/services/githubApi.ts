import ky from 'ky';

const GITHUB_API_URL = 'https://api.github.com';
const ACCEPT_HEADER = 'application/vnd.github.v3+json';

export type CurrentUserResponse = {
	avatar_url?: string;
	url?: string;
	name?: string;
	email?: string;
};

export function getCurrentUser(token: string) {
	return ky
		.get(`${GITHUB_API_URL}/user`, { headers: { Accept: ACCEPT_HEADER, Authorization: `token ${token}` } })
		.json<CurrentUserResponse>();
}
