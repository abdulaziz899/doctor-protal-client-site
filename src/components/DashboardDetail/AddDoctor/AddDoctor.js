import React, { useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddDoctor = () => {

    const [file ,setFile]=useState(null);
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data =>{
        const doctors={
            name:data.name,
            email:data.email,
            img:file
        }
        fetch('https://ancient-sands-53700.herokuapp.com/addDoctor', {
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(doctors),
            
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })
        
    }


    const handleFileUpload=event=>{
        console.log(event.target.files[0]);
        const imagesData=new FormData();
        imagesData.set('key','a07cb5e18d42a1a96ebcf8657be64589');
        imagesData.append('image',event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imagesData)
          .then(function (response) {
            console.log(response.data.data.display_url);
           
            setFile(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div style={{height:'100vh'}} className='row container-fluid'>
            <div style={{backgroundColor:"#1bddd3",color:'green'}} className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 ">
                <h1 className='text-center text-primary'>Doctor Panel</h1>
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" {...register("name",{ required: true })}  name="name" placeholder="Your Name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group">
                        <input type="text"  {...register("phone",{ required: true })} name="phone" placeholder="Phone Number" className="form-control" />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" {...register("email",{ required: true })}name="email" placeholder="Email" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                        <div className="form-group">
                            <input onChange={handleFileUpload} className="form-control" name="file" placeholder="Upload Doctor Image" type="file" />
                        </div>
                    <div className="form-group text-center">
                        <button type="submit" className="btn btn-outline-primary">Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;