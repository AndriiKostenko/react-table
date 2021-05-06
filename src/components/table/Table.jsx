import React from 'react';
import { useTable } from 'react-table';
import {COLUMNS} from '../columns/Columns';
import DATA from '../../data/data1.json';
//import './style.css'

 

export default function Table() {

    const columns = React.useMemo(() => COLUMNS, [])
    const data = React.useMemo(() => DATA.rows, [])


    const tableInstance = useTable({columns, data})

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = tableInstance;

     // console.log('rows',rows);
      

    return (
        <table {...getTableProps()} style={{ border: 'solid 1px grey',
        borderSpacing: 0, borderCollapse: 'collapse' }}>
        <thead className='tableHeader'>
          {headerGroups.map(headerGroup => (
                 
            <tr {...headerGroup.getHeaderGroupProps()} className='headerRow'>
              {headerGroup.headers.map(column => (
             
                <th className='headerCell'
                  {...column.getHeaderProps()}
                >
                  {column.render('Header')}
                </th>
             
              ))}
            </tr>
       
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                    return (
                            <td
                            {...cell.getCellProps()}
                            style={{
                                padding: '10px',
                                border: 'solid 1px gray',
                               // background: 'papayawhip',
                            }}
                            >
                            {cell.render('Cell')}
                            </td>
                  
                    )})}
            
              </tr>
            )
          })}
        </tbody>
      </table>
    )
}
