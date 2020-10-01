import React from 'react';
import PersonList from './Components/PersonList';
import PersonInput from './Components/PersonInput';


class App extends React.Component {


  render() {
    return (
      <div>
          <PersonInput />
        <PersonList  />
      </div>
    );
  }
}
export default App;
