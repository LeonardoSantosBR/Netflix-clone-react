import { HeaderContainer } from "../style/headerStyle";

export const Header = ({ blackHeader }) => {
  return (
    <HeaderContainer>
      <header className={blackHeader ? "black-header" : ""}>
        <div className="header--logo">
          <a href="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              alt="Logo"
            />
          </a>
        </div>
        <div className="header--iconPerfil">
          <a href="/">
            <img
              src="https://i.pinimg.com/564x/2b/90/0d/2b900d5612554cd0b5edf7d8e848c3ea.jpg"
              alt="ícone de perfil"
            />
          </a>
        </div>
      </header>
    </HeaderContainer>
  );
};
