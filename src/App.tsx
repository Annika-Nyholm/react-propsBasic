import './App.css';
import { RecieverOfData } from './components/RecieverOfData';
import { Object } from './models/Object';
import { PresentObject } from './components/PresentObject';
import { useState } from 'react';

function App() {
	const [objects, setObjects] = useState<Object[]>([
		new Object(1, 'Bosse', 10, 'cat', false, 'creme'),
		new Object(2, 'Bailey', 4, 'dog', true, 'white and brown'),
		new Object(3, 'Stella', 12, 'horse', true, 'red'),
	]);
	console.log('hallå?', objects);

	const addNewAnimal = (newObject: Object) => {
		setObjects([...objects, newObject]);
	};

	const removeAnimal = (id: number) => {
		setObjects(objects.filter((obj) => obj.id !== id));
	};

	const updateAnimal = (id: number, updatedProperties: Partial<Object>) => {
		setObjects(
			objects.map((obj) =>
				obj.id === id ? { ...obj, ...updatedProperties } : obj
			)
		);
	};

	return (
		<>
			<RecieverOfData name={'Bosse'} age={10} idiot={true} />
			<PresentObject
				objects={objects}
				title='myAnimals'
				addNewAnimal={addNewAnimal}
				deleteAnimal={removeAnimal}
				updateAnimal={updateAnimal}
				objectCount={objects.length}
			/>
		</>
	);
}

export default App;
