import { SerializeFrom } from '@remix-run/node';
import { Link } from '@remix-run/react';
import { Task } from 'keelClient';

type TaskListType = {
	tasks: SerializeFrom<Task[]>;
};

export const TaskList = ({ tasks }: TaskListType) => {
	return (
		<ul>
			{tasks.map((task) => (
				<li key={task.id}>
					<div>
						<div>
							<p>{task.description}</p>
							<div>
								<Link to={task.id}>
									<p>Edit</p>
								</Link>
								<button>
									<p>Delete</p>
								</button>
							</div>
						</div>
					</div>
				</li>
			))}
		</ul>
	);
};
