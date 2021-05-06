import React from 'react';
import './App.css';
//import { COLUMNS } from './components/columns/Columns'
//import data from './data/data1.json'
import styled from 'styled-components'

import Table from './components/table/Table'


const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
      
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`


function App() {

 // const COLUMNS = React.useMemo(()=> COLUMNS, []);
  //const data = React.useMemo(() => data, [])

  return (
    <div className="App">
      <Styles>
        <Table />
      </Styles>
     
      
  
    </div>
  );
}

export default App;
