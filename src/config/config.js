export  function configMail(){
    return(
        {
            host: "smtp-mail.outlook.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: "tomucho99@hotmail.com",
                pass: "losfis",
            },
            tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false,
            },
        }
    )
}
export const PORT=8080;
export const CONFIG_MONGO={
    uri:"mongodb://localhost:27017",
}
export const PATH_FOR_REPORTS='/home/tom/TP2/tp2/reports';
