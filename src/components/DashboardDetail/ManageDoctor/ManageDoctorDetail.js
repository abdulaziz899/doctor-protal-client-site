import React from 'react';

const ManageDoctorDetail = (props) => {
    const {name,img,_id}=props.doctor;
    const deleteDoctor=id=>{
        console.log(id);
        fetch(`https://ancient-sands-53700.herokuapp.com/delete/${id}`,{
            method:'DELETE',
        })
        .then(res=>res.json())
        .then(data=>{
            if (data) {
                alert('deletes success ')
            }
           })
    }
    return (
        <div className='col-md-4 col-sm-12'>
            <div className='w-100 my-3 shadow text-center'>
                <h3>{name}</h3>
                <img style={{height:"250px"}} className='w-100' src={img} alt=""/>
                <button onClick={()=>deleteDoctor(_id)} className="btn btn-outline-danger my-3 ">Delete</button>
            </div>
        </div>
    );
};

export default ManageDoctorDetail;