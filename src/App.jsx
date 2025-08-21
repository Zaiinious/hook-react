import Counter from "./components/Counter";
import UserList from "./components/UserList";
import FormFocus from "./components/FormFocus";
import Factorial from "./components/Factorial";
import ItemList from "./components/ItemList";
import TodoReducer from "./components/TodoReducer";
import ThemeSwitcher from "./components/ThemeSwitcher";
import ScrollPosition from "./components/ScrollPosition";
import CustomInput from "./components/CustomInput";
import DebugValueExample from "./components/DebugValueExample";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <Counter />
      <UserList />
      <FormFocus />
      <Factorial />
      <ItemList />
      <TodoReducer />
      <ThemeSwitcher />
      <ScrollPosition />
      <CustomInput />
      <DebugValueExample />
    </div>
  );
}
