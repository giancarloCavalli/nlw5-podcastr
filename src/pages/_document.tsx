import Document, { Html, Head, Main, NextScript } from 'next/document';

//Document é usado, ao invés de simplesmente adicionar os imports de fonte no _app.tsx, porque com esse arquivo
//essas configurações são carregadas somente 1 vez, e não a cada troca de página como se fosse somente com _app.tsx
export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@400;600&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}