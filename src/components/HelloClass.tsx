import React from "react";

interface HelloClassProps {
	name:string;
	age:number;
	address?: string; //o siempre se necsita
	email: string;
}

interface HelloClassState{
    count: number;
    error: '';
}
export class HelloClass extends React.Component<HelloClassProps, HelloClassState> {
    state:HelloClassState = {
        count: 0,
        error:''
        
        
    }
    increment = (count:number) => {
		this.setState((previosState)=>({count:previosState.count + count}));
	}
	decrement = (num:number) => {
		this.setState((previosState)=>({count:previosState.count - num }));
	}

    componentDidMount(){
        //EJEMPLOS DE USO
        //API CALL ACTUALIXAR EL ESTADO CON EL RESULTADO
       //AGREGAR EVENT LISTENER
        console.log('Se agrego componEnte en el DOM');
    
    }
    componentDidUpdate(){
        if(this.state.count < 0){
       alert('Count no debe ser negativo')
        }
        console.log('Se actualizo componente');
        
    }
    componentWillMount(){
        //ELIMINAR UN EVENT LISTENER
        console.log('componente se va a eliminar');
    }
    render(){
    const {name, age, address, email}= this.props;
    const {count} = this.state;
    return  <div>
    <ul>
    <li>Name: {name}</li>
    <li>Age: {age}</li>
    <li>Address: {address}</li>
    <li>Email: {email}</li>
    </ul>
    <p>Count {count}</p>
   <p>{this.state.error}</p>
    <button onClick={()=>this.increment(1)}>Increment</button>
			<button onClick={() => this.decrement(2)}>Decrement</button>
</div>
}
}