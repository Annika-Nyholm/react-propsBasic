import { useState } from 'react';
import { Object } from '../models/Object';

interface IAddObjectProps {
	addNewAnimal: (newObject: Object) => void;
	objectCount: number;
}

export const AddObject = ({ addNewAnimal, objectCount }: IAddObjectProps) => {
	const [newName, setNewName] = useState('');
	const [newAge, setNewAge] = useState(0);
	const [newAnimal, setNewAnimal] = useState('');
	const [newFeisty, setNewFeisty] = useState(false);
	const [newColor, setNewColor] = useState('');

	const handleAddAnimal = () => {
		const newObject: Object = {
			id: objectCount + 1,
			name: newName,
			age: newAge,
			animal: newAnimal,
			feisty: newFeisty,
			color: newColor,
		};

		addNewAnimal(newObject);

		setNewName('');
		setNewAge(0);
		setNewAnimal('');
		setNewFeisty(false);
		setNewColor('');
	};

	return (
		<div>
			<input
				type='text'
				placeholder='name'
				value={newName}
				onChange={(e) => setNewName(e.target.value)}
			/>
			<input
				type='number'
				placeholder='age'
				value={newAge}
				onChange={(e) => setNewAge(parseInt(e.target.value))}
			/>
			<input
				type='text'
				placeholder='animal'
				value={newAnimal}
				onChange={(e) => setNewAnimal(e.target.value)}
			/>
			<label>
				Feisty
				<input
					type='checkbox'
					name='feisty'
					value='yes'
					checked={newFeisty}
					onChange={() => setNewFeisty(true)}
				/>{' '}
				Yes
				<input
					type='checkbox'
					name='feisty'
					value='no'
					checked={!newFeisty}
					onChange={() => setNewFeisty(false)}
				/>{' '}
				No
			</label>
			<input
				type='text'
				placeholder='color'
				value={newColor}
				onChange={(e) => {
					setNewColor(e.target.value);
				}}
			/>
			<button type='button' onClick={handleAddAnimal}>
				Add new animal
			</button>
		</div>
	);
};
