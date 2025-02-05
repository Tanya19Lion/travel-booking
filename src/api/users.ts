import { getDatabaseTable } from './helpers';
import { User } from '../lib/types';  

export const getUser = (data: User): User | undefined => {
	const { email, password } = data;

	const users = getDatabaseTable('users');
	if (!users) {
		console.log('No users table found');
		return;
	}

	const user = users.find((user: User) => user.email === email && user.password === password);

	return user;
};
