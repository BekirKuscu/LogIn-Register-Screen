import React from "react";

//So we created and exported the props from the App.jsx file
//to this form.jsx file. Now we check for it in order to render
//something different inside our button. In this case what we want to do
//is check to see if props.isRegistered (spell it right) is true, and if so
//we want to show the word 'Login', but otherwise we're going to show the word
//'register'. And make sure YOU WRAP IT INSIDE CURLY BRACES SO IT GETS
//HIGHLIGHTED PROPERLY. Look below to see what it will look like.

//Once this is done, we can go back to app.js and switch this
//\/ariable from false to true you'll see that, that goes to Login, and
//when false we will see Register printed. (\/ar userIsRegisted = false/true)

//Now to get rid of or keep the confirm password box we can use the AND operator.
//Since this is an 'if' moment.
//So we could open a set of parantheses and check if prop.isRegistered is
//true or false. So if it's true nothing will be rendered.
//Look below to see what it will look like.
//So we check the property 'isRegistered', and if it's false we print
//the confirm password. So basically
//We can always test these out by changing true and false etc on App.js
//This below could ha\/e also been written using a ternary operator:
//{props.isRegistered === false ? <input type="password" placeholder =
//"Confirm Password" /> : null}
//But ofc if you want the most efficient way of creating this kind of
//conditional rendering its going to be through using the ampersand
//operator, by remoing the null and etc. Also, we can further shorten this by
//writing {props.isRegistered === false && etc } like this
// {!props.isRegistered && etc}
//So we can end up with a one line statement that does e\/erything we want:
//{!props.isRegistered && <input type="password" placeholder="Confirm Password"} />}

//Conditional rendering is a fundamental part of React.

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {props.isRegistered === false && (
        <input type="password" placeholder="Confirm Password" />
      )}
      <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;