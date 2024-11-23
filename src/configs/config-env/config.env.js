const dotenv = require('dotenv'); 

const configEnv = () => {
    let ambiente;

    if (process.env.NODE_ENV === 'production') {
        ambiente = 'environments/.env-prod';
        console.log('produccion');
    } else if (process.env.NODE_ENV === 'development'){
        ambiente = 'environments/.env-qa';
        console.log('pruebas');
    } else {
        ambiente = 'environments/.env-local';
        console.log('local');
    }
    dotenv.config({ path: `${ambiente}` });
    
    console.log(process.env.NODE_ENV);
    console.log(ambiente);
    // console.log(process);

}

module.exports = { configEnv }; 