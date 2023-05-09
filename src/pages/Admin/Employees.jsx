import React, { useEffect, useState, useRef } from "react";
import { deleteEmployeeByID, getAllEmployees } from "../../api/httprequests";
import { Link } from "react-router-dom";
import { Card, Row,Space,Col } from 'antd';
import Search from './search';



const Employees = () => {
  let [employees, setEmployees] = useState([]);
  const storage = useRef([])
  useEffect(() => {
    getAllEmployees().then((data) => {
      setEmployees(data);
      storage.current = data
    });
  }, [setEmployees,employees]);






  return (
    <>
    <Search style={{marginTop:"0px"}} storage={storage} setEmployees={setEmployees} />
    <Space>
      
      <Row>
     
      {employees &&
        employees.map((employee) => {
          return (

            <Col className='gutter-row' span={6} xs={24} sm={12} md={8} lg={6}>
              <Card key={employee.id} hoverable style={{marginTop:"40px",marginBottom:"40px",textAlign:"center",fontSize:"20px"}} cover={<img style={{borderRadius:"50%"}} alt="example" src="https://us.123rf.com/450wm/apoev/apoev1903/apoev190300345/124206821-person-gray-photo-placeholder-woman-in-costume-on-white-background.jpg?ver=6" />}>
              <Link style={{color:"black"}} to={`${employee.id}`}>{employee.name}{employee.surname}{" "}</Link> <hr/>
              <button style={{backgroundColor:"#C4C0C1",border:"none",width:"100px",marginLeft:"5px",color:"white",height:"40px",borderRadius:"50%"}} onClick={()=>{
                if (window.confirm(`are you sure to delete ${employee.name}?`)) {
                  deleteEmployeeByID(employee.id); //deleting from API
                  let filteredEmployees = employees.filter((item)=>item.id!==employee.id);
                  setEmployees(filteredEmployees); // RENDERING STATE
                }
              }}>Delete</button>
              <button style={{backgroundColor:"#C4C0C1",border:"none",width:"100px",marginLeft:"5px",height:"40px",borderRadius:"50%"}}><Link style={{color:"white"}} to={`/admin/employees/edit/${employee.id}`}>Edit</Link></button>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Space>
    </>
  );
};

export default Employees;