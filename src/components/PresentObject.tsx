import { Object } from '../models/Object';
import { AddObject } from './AddObject';

interface IPresentObjectProps {
	objects: Object[];
	title: string;
	addNewAnimal: (newObject: Object) => void;
	deleteAnimal: (id: number) => void;
	objectCount: number;
}

export const PresentObject = ({
	objects,
	title,
	deleteAnimal,
	addNewAnimal,
	objectCount,
}: IPresentObjectProps) => {
	return (
		<div>
			<h1> {title} </h1>
			<AddObject addNewAnimal={addNewAnimal} objectCount={objectCount} />
			{objects.map((obj) => (
				<div key={obj.id}>
					<h2>{obj.name}</h2>
					<p>Age: {obj.age} </p>
					<p>Type: {obj.animal} </p>
					<p>Feisty: {obj.feisty ? 'Yes' : 'No'}</p>
					<p>Color: {obj.color}</p>
					<button type='button' onClick={() => deleteAnimal(obj.id)}>
						Remove
					</button>
				</div>
			))}
		</div>
	);
};
