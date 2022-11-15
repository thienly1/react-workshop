import React, {useState} from 'react';

const DataTable = () => {

    const initialState= [{id:1, firstName:"Ly", lastName:"Ta", age:34, birthDate: "1989-07-08", country:"Sweden", city:"Växjö"},
        {id:2, firstName:"Sarah", lastName:"Ercelik", age:15, birthDate: "2007-11-12", country:"Sweden", city:"Växjö"} ];
    const [studentList, setStudentList] = useState(initialState);
    const [showDetails, setShowDetails] = useState(false);
    const [student, setStudent] = useState({id:0 , firstName:"", lastName:"", age:0, birthDate: "", country:"", city:""})



    const ResetForm= () => {
        setStudent({});
        setShowDetails(false);

    }

    const TableHeader = () =>{
        return(
                <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
                </thead>
        )
    }
    const TableAction = (props) =>{
        const showData= () => {
            console.log("STUDENT: " ,student)
            setStudent(props.student);
            setShowDetails(true);
        }
      return(
              <button type= "button" className="btn btn-primary" onClick={showData}>Details</button>
      )
    }
    const TableRow = (props) => {
        return(
            <tbody>
            {props.studentList.map(student1 => (
                <tr>
                    <td>{student1.id}</td>
                    <td>{student1.firstName}</td>
                    <td>{student1.lastName}</td>
                    <td>{student1.age}</td>
                    <td><TableAction student={student1}/></td>
                </tr>
            ))
            }
            </tbody>
        )
    }

    const ShowStudentDetails = () =>{
        console.log(student);
        return(
           <>
               {showDetails && (
         <div className="card m-5">

            <div className="card-header bg-dark">
                <h3 className="text-white">Student Information</h3>
            </div>

            <div className="card-body col-sm-5">
                <div key={student.id} value={student} className="form-floating my-3">
                    <h5>{student.country} {student.city}</h5>
                    <p>Id: {student.id}</p>
                    <p>Name: {student.firstName} {student.lastName}</p>
                    <p>BirthDate: {student.birthDate}</p>

                </div>
            </div>

            <div className="card-footer">
                <button type="button" className="btn btn-primary" onClick={ResetForm}>
                    Hide
                </button>
            </div>
        </div>)}
    </>
    )
    }

    return (
        <div>
            <div className='container' >
              <form className='form form-control'>
                <h5>Student List</h5>
            <table border='1' className='table table-white table-striped'>
            <TableHeader/>
            <TableRow studentList={studentList} />
            </table>
            </form>
            </div>
            <div className="w-50 mx-auto">
                <ShowStudentDetails/>
            </div>
        </div>
    )
};

export default DataTable;