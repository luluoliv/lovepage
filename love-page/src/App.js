
import './App.css';
import Btn from './components/button';
import Dropdown from './components/dropdown';

function App() {

  function showPass() {
    let inputLogin = document.querySelector("#login-input");
    let icon = document.querySelector('#login-eye');

    if (inputLogin.type === "password") {
      inputLogin.type = "text";
    } else {
      inputLogin.type = "password";
    }

    if (icon.classList.contains("fa-regular fa-eye")) {
      icon.classList.remove("fa-regular fa-eye");
      icon.classList.add("fa-regular fa-eye-slash");
    } else {
      icon.classList.remove("fa-regular fa-eye-slash");
      icon.classList.add("fa-regular fa-eye");
    }
  };

  return (
    <div className="App ">
      <div className="login-container flex w-2/5 justify-center items-center p-12 mt-[3%] m-auto flex-wrap rounded-3xl bg-[#252525] shadow-lg">
        <img className="couple w-1/2 rounded-[75px]" src={'https://img.freepik.com/free-vector/cute-dog-licking-cat-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium_138676-5739.jpg?w=2000'} alt=""></img>
        <div className="login-inputs w-3/4 text-center mt-8">
          <Dropdown />
          <div className="login-password flex flex-row justify-between mt-3 px-4 py-2 rounded-xl border border-solid border-[#757575]">
            <input id='login-input' className="login-input w-full bg-transparent placeholder:text-[#757575] text-[#757575] text-xs" type="password" placeholder="Senha" minlength="5" maxlength="8" required></input>
            <button onClick={showPass} id="login-eye" className="login-eye fa-regular fa-eye text-[#757575]"></button>
          </div>
          <Btn name="Login" />
        </div>
      </div>
    </div>
  );
}

export default App;
