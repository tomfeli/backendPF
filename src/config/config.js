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

export  function configArchivo(){

}