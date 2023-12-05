import {
	json,
	type ActionFunctionArgs,
	type MetaFunction,
} from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { CreateTaskForm } from '~/components/CreateTaskForm';
import { TaskList } from '~/components/TaskList';
import { createClient } from '~/utils/createClient';

export const meta: MetaFunction = () => {
	return [
		{ title: 'New Remix App' },
		{ name: 'description', content: 'Welcome to Remix!' },
	];
};

export const loader = async () => {
	const client = createClient();
	const response = await client.api.queries.listTask();
	const tasks = response.data?.results ?? [];

	return json(tasks);
};

export const action = async ({ request }: ActionFunctionArgs) => {
	const client = createClient();
	const formData = await request.formData();
	const description = String(formData.get('description'));

	if (!description) {
		throw new Error('No description provided.');
	}

	const response = await client.api.mutations.createTask({ description });

	if (response.data) {
		return null;
	} else {
		throw new Error(response.error.message);
	}
};

export default function Index() {
	const tasks = useLoaderData<typeof loader>();
	return (
		<div>
			<div>
				<div>
					<CreateTaskForm />
					<section>
						{tasks.length === 0 ? (
							<p>No tasks yet!</p>
						) : (
							<TaskList tasks={tasks} />
						)}
					</section>
				</div>
			</div>
		</div>
	);
}
