import data1 from '../../data/data1.json';


const numberOfEmployees = data1.rows.numberOfEmployees;
const keys = Object.keys(data1.rows[0].numberOfEmployees);
let arr =  ["501-1000", "50-200", ">1000", "201-500", "<50"]
console.log(arr)

function sorting(a,b) {
    if (a < b) {
        return -1
    }
    else {return 1}
}

arr.sort(sorting)

console.log(arr)

const employeesColumn = Object.keys(data1.rows[0].numberOfEmployees).map((elem) => ({
    id: elem,
    Header: elem,   
    accessor:`numberOfEmployees.${elem}`,
}))


const salesColumn = Object.keys(data1.rows[0].salesVolume).map((elem) => ({
    id: `sales_${elem}`,
    Header: elem,   
    accessor: `salesVolume.${elem}`,
}))

console.log(salesColumn)



export const COLUMNS = [
    {
        Header: 'Job Title',
        accessor: 'jobTitle'
    },
    {
        Header: 'Number of companies-participants',
        accessor: 'numberOfCompaniesParticipants'
    },
    {
        Header: 'Number of employees',
        columns: employeesColumn,
    },
    {
        Header: 'Sales volume',
        columns: salesColumn,
       
    }

]

