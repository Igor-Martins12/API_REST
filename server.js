import app from './app';




const port = 3006;
app.listen(port, () => {
    console.log();
    console.log(`executando na porta ${port}`);
    console.log(`Ctrl + click em http://localhost:${port}` );
})