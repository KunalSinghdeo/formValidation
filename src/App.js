import logo from "./logo.svg";
import "./App.css";
import FormInput from "./components/FormInput";

function App() {
  return (
    <div className="App">
      <form>
        <FormInput placeholder="Username" />
        <FormInput placeholder="Full Name" />
        <FormInput placeholder="Email" />
        <FormInput placeholder="Something Else" />
      </form>
    </div>
  );
}

export default App;
