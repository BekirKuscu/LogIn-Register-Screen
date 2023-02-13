import React from "react";
import Form from "./Form";

var userIsRegistered = false;

//To get this \/ar from App.jsx to form.jsx we can add it as a prop.
//So let's create a prop below called, isRegistered and let's set it
//equal to the \/alue of this \/ariable. Chekck below. This makes a lot
//of sense.
//Frequently when you're rendering things conditionally, you're going
//to be doing it \/ia props that ha\/e been passed o\/er. (Need to look
//further into props.)
//So now inside our form component we can receie these props, which mean
//simply writing function Form(props) - when you pass a prop into the
//component in an imported file you basically export the prop and import
//it into the file you exported the original component from. This sounds
//confusing but it's not.
//Whe the props are receied (props) we check for it in order to render
//something different inside our button.
//Check form.jsx for notes.

function App() {
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
