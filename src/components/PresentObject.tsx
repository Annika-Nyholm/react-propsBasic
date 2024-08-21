import { useState } from 'react';
import { Object } from '../models/Object';
import { AddObject } from './AddObject';

interface IPresentObjectProps {
	objects: Object[];
	title: string;
	addNewAnimal: (newObject: Object) => void;
	deleteAnimal: (id: number) => void;
	updateAnimal: (id: number, updatedProperties: Partial<Object>) => void;
	objectCount: number;
}

export const PresentObject = ({
	objects,
	title,
	deleteAnimal,
	addNewAnimal,
	updateAnimal,
	objectCount,
}: IPresentObjectProps) => {

	const [selectedAnimal, setSelectedAnimal] = useState<Partial<Object>>({});

	const handleUpdate = (id: number) => {
		updateAnimal(id, selectedAnimal);
		setSelectedAnimal({});
	}


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
					<input
						type='text'
						placeholder='Update Name'
						value={selectedAnimal.name || ''}
						onChange={(e) =>
							setSelectedAnimal({ ...selectedAnimal, name: e.target.value })
						}
					/>
					<input
						type='number'
						placeholder='Update Age'
						value={selectedAnimal.age || 0}
						onChange={(e) =>
							setSelectedAnimal({ ...selectedAnimal, age: parseInt(e.target.value) })
						}
					/>
					<button onClick={() => handleUpdate(obj.id)}>Update</button>
				</div>
			))}
		</div>
	);
};
