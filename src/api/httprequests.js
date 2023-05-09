import axios from "axios";
import { BASE_URL } from "./base_url";

//get all products
export const getAllEmployees = async()=>{
    let globalData;
    await axios.get(`${BASE_URL}/employees`)
    .then(res=>{
        globalData = res.data;
    });

    return globalData;
}
//get product by id
export const getEmployeeByID = async(id)=>{
    let globalData;
    await axios.get(`${BASE_URL}/employees/${id}`)
    .then(res=>{
        globalData = res.data;
    });
    return globalData;
}
//post new product
export const postEmployee = (newEmployee)=>{
    axios.post(`${BASE_URL}/employees`,newEmployee);
}
//delete product by id
export const deleteEmployeeByID = (id)=>{
    axios.delete(`${BASE_URL}/employees/${id}`);
}
//edit product by id
export const editEmployeeByID = (id,updatedEmployee)=>{
    axios.put(`${BASE_URL}/employees/${id}`,updatedEmployee);
}