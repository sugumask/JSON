import React from 'react';
import { Component } from 'react';

class CreateUser extends Component{
    constructor() {
        super();
        this.state = {
            biodata: [{
                Firstname: '',
                Lastname: '',
                Age: '',
                College: ''                
            }],
            id: null
        }
        this.firstName = this.firstName.bind(this);
        this.lastName = this.lastName.bind(this);
        this.dob = this.dob.bind(this);
        this.institute = this.institute.bind(this);
        this.componentClicked=this.componentClicked.bind(this);
    }
    firstName(e) {
        this.setState({
            Firstname: e.target.value
        })
    }
    lastName(e) {
        this.setState({
            Lastname: e.target.value
        })
    }
    dob(e) {
        this.setState({
            Age: e.target.value
        })
    }
    institute(e) {
        this.setState({
            College: e.target.value
        })
    }
    clear = () => {
        this.setState({
            Firstname: '',
            Lastname: '',
            Age: '',
            College: '',
            id:null
        })
    }
    delete=()=>{
        fetch('http://localhost:3000/data/'+this.state.id, {
                method: 'DELETE',
                // body: JSON.stringify({
                //     'Firstname': this.state.Firstname, 'Lastname': this.state.Lastname,
                //     'Age': this.state.Age, 'College': this.state.College
                // }),
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                }
    
            })
                .then(response => response.json()).then(res =>{
                    this.getAll()
                })
    }
    addition = (e) => {
        e.preventDefault();
        
        if (this.state.id===null) {
            fetch('http://localhost:3000/data', {
                method: 'POST',
                body: JSON.stringify({
                    'Firstname': this.state.Firstname, 'Lastname': this.state.Lastname,
                    'Age': this.state.Age, 'College': this.state.College
                }),
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                }
    
            })
                .then(response => response.json()).then(res =>{
                    this.getAll()
                    this.clear()
                })
                alert('saved successfully');
        }
        else
        {
            fetch('http://localhost:3000/data/'+this.state.id, {
                method: 'PUT',
                body: JSON.stringify({
                    'Firstname': this.state.Firstname, 'Lastname': this.state.Lastname,
                    'Age': this.state.Age, 'College': this.state.College
                }),
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                }
    
            })
                .then(response => response.json()).then(res =>{
                    this.getAll()                    
                })
                    
        }        
        
    }
    componentClicked=(data)=>{
        console.log(data);
        // this.setState({
        //     Firstname:data.Firstname,
        //     Lastname:data.Lastname,
        //     Age:data.Age,
        //     College:data.College
        // })

        fetch('http://localhost:3000/data/'+data.id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }

        })
            .then(response => response.json()).then((data) =>{

                this.setState({
                    Firstname: data.Firstname,
                    Lastname: data.Lastname,
                    Age: data.Age,
                    College: data.College,
                    id : data.id
                })
            })
        //        console.log(res))
        
    }
    
    render(){
        console.log(this.props);
        return(
            <form>
                    Firstname : <input type='text' value={this.state.Firstname} onChange={this.firstName} className='user-field' />
                    Lastname : <input type='text' value={this.state.Lastname} onChange={this.lastName} className='user-field' />
                    Age : <input type='text' value={this.state.Age} onChange={this.dob} className='user-field' />
                    College : <input type='text' value={this.state.College} onChange={this.institute} className='user-field' />
                    CGPA : <select>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                        <option value='8'>8</option>
                        <option value='9'>9</option>
                        <option value='10'>10</option>
                    </select>
                    <button value='submit' onClick={this.addition}>SAVE</button>
                    <button value='clear' onClick={this.clear}>CLEAR</button>
                    <button value='delete' onClick={this.delete}>DELETE</button>
                    <button value='all' onClick={this.getAll}>ALL</button> </form>
        )
    }
}
export default CreateUser;
                
