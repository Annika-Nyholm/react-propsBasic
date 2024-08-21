import { Prop } from "../models/prop"


export const RecieverOfData = (props: Prop) => {
 
    return <>
    <h1>{props.name}</h1>
    <p> is a cat. </p>
    <p> he is {props.age} years old.</p>
    <span>Idiot:</span><input type="checkbox" name="idiot" checked={props.idiot} />
    </>
}