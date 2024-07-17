import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function MainContent(props) {
    const { theme, toggleTheme } = useContext(ThemeContext);
    // 조금 더 편하게 꺼내올 수 있도록 hook 사용

    // 원래 방식
    // const context = useContext(ThemeContext);
    // const theme = context.theme;
    // const toggleTheme = context.toggleTheme;

    return (
        <div style={
            {
                width: '50vw',
                height: '50vh',
                padding: '1.5rem',
                backgroundColor: theme == 'light' ? 'white' : 'black',
                color: theme == 'light' ? 'black' : 'white'
            }
        }>
            <p>안녕하세요, 테마 변경이 가능한 웹사이트 입니다.</p>
            <button onClick={toggleTheme}>테마 변경</button>
        </div>
    );
}

export default MainContent;