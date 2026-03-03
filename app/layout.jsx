import '../styles/globals.css';

export const metadata = {
    title: {
        template: '%s | Worst Eleven',
        default: 'Worst Eleven'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
