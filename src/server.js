import app from './app';

const port = process.env.APP_PORT;
app.listen(port, () => {
    console.log();
    console.log(`executando na porta ${port}`);
    console.log(`Ctrl + click em http://localhost:${port}` );
})
