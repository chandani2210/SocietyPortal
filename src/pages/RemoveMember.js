import React,{Component} from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import '../css/Flat.css';
class RemoveMember extends Component{

  constructor(){
    super();
    this.state={
      id:'',
    }
  }

  onChangedId = (event) =>{
    this.setState({
        id: event.target.value
    })
  }

  onSubmitHandler=(event)=>{
    event.preventDefault();
    const id=this.state.id
        axios.delete('http://localhost:8080/society/admin/members/' + id)
        .then(resp =>{
          console.log(resp)
          alert('Member removed Successfully!!')
        })
        .catch(error=>{
          console.log(error)
          alert('Something went wrong!')
        })
  }

    render(){
        return (

            <div>
            {/* NAVIGATION BAR */}
      
      
   <Navbar/>


      {/* TAKING INPUTS */}

      <div>
      <div class="card mt-5 container fit-card">
                  <div class="card-body">
                <form onSubmit={this.onSubmitHandler.bind(this)}>
                    <div className="form-group">
                    <label>Id</label>
                    <input value={this.id} onChange={this.onChangedId} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </input>
                    </div>
                    <button type="submit" className="btn btn-danger w-25">Remove</button>
                </form>
                </div>
                </div>
            </div>
                  </div>
            
        );
    }
}

export default RemoveMember;