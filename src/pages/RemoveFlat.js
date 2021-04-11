import React,{Component} from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import '../css/Flat.css';
class RemoveFlat extends Component{
  constructor(){
    super();
    this.state={
      flat_number:'',
    }
  }

  onChangedFlatNo = (event) =>{
    this.setState({
        flat_number: event.target.value
    })
  }
  onSubmitHandler=(event)=>{
    event.preventDefault();
    const flatNo=this.state.flat_number
        axios.delete('http://localhost:8080/society/admin/flats/' + flatNo)
        .then(resp =>{
          console.log(resp)
          alert('Flat removed Successfully!!')
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
                    <label>Flat_No</label>
                    <input value={this.flat_number} onChange={this.onChangedFlatNo} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
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

export default RemoveFlat;