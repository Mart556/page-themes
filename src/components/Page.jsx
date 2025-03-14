import Header from "./Header";
import { ThemeProvider, ThemeContext } from "./ThemeContext";

const Page = () => {
    return (
        <ThemeProvider>
            <ThemeContext.Consumer>
                {({ theme }) => (
                    <div id="app" className={theme}>
                        <Header />
                        <article>
                            <h2>Page</h2>
                            <p>This is a page.</p>
                        </article>
                    </div>
                )}
            </ThemeContext.Consumer>
        </ThemeProvider>
    );
}

export default Page;