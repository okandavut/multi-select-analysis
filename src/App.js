import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';

import { Container,Row,Col } from 'react-bootstrap';
import makeAnimated from 'react-select/animated';
import React , {useState} from 'react';
import { useEffect } from 'react';


import Multiselect from 'multiselect-react-dropdown';


const animatedComponents = makeAnimated();


function App() {

  const options2 = [{name: 'Option 1️⃣', id: 1},{name: 'Option 2️⃣', id: 2}];
  const [selectedValueOfMultiSelect, setSelectedValueOfMultiSelect] = useState()

  //REACT-SELECT METHODS
  const [inputValue, setInputValue] = useState('')
  const [selectedValues, setSelectedValues] = useState({})

   const  onSelect =(selectedList, selectedItem) => {
     console.log('multiselect-react-dropdown onSelect', selectedList)
  }

  const onRemove = (selectedList, removedItem) => {
    console.log('multiselect-react-dropdown onRemove', selectedList)
  }

  const options = [
    { value: 'chocolate', label: 'Chat Operator' },
    { value: 'strawberry', label: 'Word 2016 Simulation' },
    { value: 'vanilla', label: 'Awareness' }
  ]


  const handleChange = (options) => {
    setSelectedValues(options)
    console.log("React select",options)
  }

  const filterColors = (inputValue) => {
    return options.filter(i =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterColors(inputValue));
    }, 1000);
  };

  const handleInputChange = (newValue: string) => {
    const inputValue = newValue.replace(/\W/g, '');
    setInputValue(inputValue)
    return inputValue;
  };

  //REACT-SELECT METHODS END

  return (
    <Container style={{marginTop:"50px"}}>
      <Row>
        <Col>Multi Select  with Animation from React-Select</Col>
        <Col>Async Multi Select from React-Select</Col>
        <Col>Multiple Select from multiselect-react-dropdown</Col>
      </Row>
      <Row>
        <Col>
         <Select
         defaultValue={[options[2]]}
         isMulti
         name="colors"
         options={options}
         components={animatedComponents}

         className="basic-multi-select"
         classNamePrefix="select"/>
         </Col>
        <Col>
          <AsyncSelect
            cacheOptions
            isMulti
            loadOptions={loadOptions}
            defaultOptions
            onInputChange={handleInputChange}
            onChange={handleChange}
          />
        </Col>
        <Col>
        <Multiselect
            options={options2} // Options to display in the dropdown
            selectedValues={selectedValueOfMultiSelect} // Preselected value to persist in dropdown
            onSelect={onSelect} // Function will trigger on select event
            onRemove={onRemove} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
            />
      </Col>
      </Row>
    </Container>
  );
}

export default App;
