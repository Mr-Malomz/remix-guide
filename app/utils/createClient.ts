import { APIClient } from '../../keelClient';

export const createClient = () => {
	if (!process.env.KEEL_API_URL) {
		throw new Error('KEEL_API_URL environment variable not set.');
	}

	const client = new APIClient({
		baseUrl: process.env.KEEL_API_URL,
	});

	return client;
};
