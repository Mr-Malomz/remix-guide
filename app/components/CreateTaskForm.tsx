import { Form } from '@remix-run/react';

export const CreateTaskForm = () => {
	return (
		<Form method='post'>
			<textarea
				name='description'
				cols={30}
				rows={2}
				placeholder='Enter task description'
				required
			/>
			<button type='submit'>Create</button>
		</Form>
	);
};
