require('dotenv').config()
const nodemailer = require ('nodemailer')
const mail = {
    user: 'thefullstackstoree@gmail.com',
    pass: 'crpujzwivvakhcqh'
}



let transporer = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port : 465,
    tls:{
        minVersion: 'TLSv1',
        rejectUnauthorized: false
    },
    secure : true,
    auth:{
        user: mail.user,
        pass: mail.pass

    }
})

const sendEemail = async (email, subject, html) => {
    try {
        await transporer.sendMail({
            from: `The Full Stacks Store<${ mail.user }>`,
            to: email,
            subject,
            text: "Forgot Password",
            html,
            attachments: [
                {
                    filename: 'fb.png',
                    path: 'src/public/images/fb.png',
                    cid: 'fb'
                },
                {
                    filename: 'ig.png',
                    path: 'src/public/images/ig.png',
                    cid: 'ig'
                },
                {
                    filename: 'ws.png',
                    path: 'src/public/images/ws.png',
                    cid: 'ws'
                },
                {
                    filename: 'em.png',
                    path: 'src/public/images/em.png',
                    cid: 'em'
                },
                {
                    filename: 'TFSS.png',
                    path: 'src/public/images/TFSS.png',
                    cid: 'TFSS'
                }


            ]
        })
    } catch (error) {
        console.log('Algo no va bien con el email', error);
    }
}   
const getTemplatee = (email,token) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <style>
            p, a, h1, h2, h3, h4, h5, h6 {font-family: 'Roboto', sans-serif !important;}
            h1{ font-size: 30px !important;}
            h2{ font-size: 25px !important;}
            h3{ font-size: 18px !important;}
            h4{ font-size: 16px !important;}
            p, a{font-size: 15px !important;}
    
            .claseBoton{
                width: 30%;
                    background-color: #fcae3b;
                    border: 2px solid #fcae3b;
                    color: black; 
                    padding: 16px 32px;
                    text-align: center;
                    text-decoration: none;
                    font-weight: bold;
                    display: inline-block;
                    font-size: 16px;
                    margin: 4px 2px;
                    transition-duration: 0.4s;
                    cursor: pointer;
            }
            .claseBoton:hover{
                background-color: #000000;
                color: #ffffff;
            }
            .imag{
                width: 20px;
                height: 20px;
            }
            .contA{
                margin: 0px 5px 0 5px;
            }
            .afooter{
                color: #ffffff !important; 
                text-decoration: none;
                font-size: 13px !important;
            }
        </style>
    </head>
    <body>
        <div style="width: 100%; background-color: #e3e3e3;">
            <div style="padding: 20px 10px 20px 10px;">
                <!-- Imagen inicial -->
                <div style="background-color: #000000; padding: 10px 0px 10px 0px; width: 100%; text-align: center;">
                    <img src="cid:TFSS" alt="" style="width: 200px; height: 60px;">
                </div>
                <!-- Imagen inicial -->
    
                <!-- Contenido principal -->
                <div style="background-color: #ffffff; padding: 20px 0px 5px 0px; width: 100%; text-align: center;">
                    <h1>Recuperar Contraseña </h1>
                    <p>
                     Hola ${email}, Para recuperar tu contraseña, haz click en el siguiente botón:
                    </p>
                
    
                    <!-- Gracias -->
                    <p>Gracias por tu tiempo.</p>
                    <p style="margin-bottom: 50px;"><i>Atentamente:</i><br>Equipo FullStackSotore</p>
    
                    <!-- Botón -->
                    <a class="claseBoton" href="${process.env.ENDPOINT}${token}">Recuperar</a>
                </div>
                <!-- Contenido principal -->
    
                <!-- Footer -->
                <div style="background-color: #282828; color: #ffffff; padding: 5px 0px 0px 0px; width: 100%; text-align: center;">
                    <!-- Redes sociales -->
                    <a href="https://www.facebook.com/" class="contA"><img src="cid:fb" class="imag" /></a>
                    <a href="https://www.instagram.com/" class="contA"><img src="cid:ig" class="imag" /></a>
                    <a href="https://wa.me/" class="contA"><img src="cid:ws" class="imag" /></a>
                    <a href="fullstackstore@gmail.com.com" class="contA"><img src="cid:em" class="imag" /></a>
                    <!-- Redes sociales -->
    
                    <h4>Soporte</h4>
                    <p style="font-size: 13px; padding: 0px 20px 0px 20px;">
                        Comunícate con nosotros por los siguientes medios:<br>
                        Correo: <a class="afooter" href="mailto:fullstackstore@gmai.com">fullstackstore@gmail.com</a><br>
                     
                    </p>
                    <p style="background-color: black; padding: 10px 0px 10px 0px; font-size: 12px !important;">
                        © 2022 copyright, todos los derechos reservados.
                    </p>
                </div>
                <!-- Footer -->
    
    
    
            </div>
        </div>
    </body>
    </html>`

}
   
   
    module.exports = {
        sendEemail,
        getTemplatee}
