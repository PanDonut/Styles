import logo from "./logo.svg";
import "./sas.css";

function App() {
  return (
    <div className="App">
      <div className="row">
        <h2>Branding</h2>
        <div className="grid">
          <div className="box akcent"><div/><h4>BRAND ACCENT</h4></div>
          <div className="box brand1"><div/><h4>BRAND THEME 1</h4></div>
          <div className="box brand2"><div/><h4>BRAND THEME 2</h4></div>
          <div className="box brandshadow1"><div/><h4>BRAND THEME SHADOW 1</h4></div>
          <div className="box brandshadow2"><div/><h4>BRAND THEME SHADOW 2</h4></div>
        </div>
      </div>
      <div className="row">
        <h2>Backdrops</h2>
        <div className="grid">
          <div className="box solid-main"><div/><h4>DUCK MUSIC SOLID MAIN</h4></div>
          <div className="box sidenav-black"><div/><h4>DUCK MUSIC SIDENAV</h4></div>
          <div className="box sidenav-active"><div/><h4>DUCK MUSIC SIDENAV ACTIVE</h4></div>
          <div className="box mobile-side"><div/><h4>DUCK MUSIC MOBILE SIDEBAR</h4></div>
          <div className="box menu"><div/><h4>MENU</h4></div>
          <div className="box third"><div/><h4>DUCK STORE THIRD THEME</h4></div>
          <div className="box primary-bg"><div/><h4>DUCK STORE PRIMARY BACKGROUND THEME</h4></div>
          <div className="box primary"><div/><h4>DUCK STORE PRIMARY THEME</h4></div>
          <div className="box range"><div/><h4>DUCK STORE RANGE</h4></div>
        </div>
      </div>
      <div className="row">
        <h2>Text colors</h2>
        <div className="grid">
          <div className="box text-gray"><div/><h4>TEXT GRAY</h4></div>
          <div className="box text-white"><div/><h4>TEXT WHITE</h4></div>
        </div>
      </div>
      <div className="row">
        <h2>Buttons</h2>
        <div className="grid">
          <div className="box btns"><div/><h4>DEFAULT BUTTON</h4></div>
          <div className="box sepe"><div/><h4>SECONDARY BUTTON</h4></div>
          <div className="box dslogin"><div/><h4>DUCK STORE LOGIN</h4></div>
        </div>
      </div>
    </div>
  );
}

export default App;
