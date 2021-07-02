import React from "react";
import Helmet from "react-helmet";

export default ({ children }) => (
    <>
        <Helmet>
            <title>Cool</title>
        </Helmet>
        <div>
            <header>
                <h1></h1>
                <nav>
                    <ul>
                    </ul>
                </nav>
            </header>
            {children}
            <footer>{`${new Date().getFullYear()} No Rights Whatsoever Reserved`}</footer>
        </div>
    </>
)