const production = {
    name:"production",
    asset_path: './assets',
    session_cookie_key:"something",
    db:'codial_production',
    smtp:{
        service:'Gmail',
        host:'smtp.gmail.com',
        port:587,
        secure:false,
        auth:{
            user:'singhlavanya94',
            pass:'sudharana007!',
        }
    },
    google_client_id:"812632856780-j38fkr3n1vna34tcbmqtfv14endneh5p.apps.googleusercontent.com",
    google_client_secret:"xp24pTQMZtihmOnGALnLwjhd",
    google_call_back_url:"http://localhost:8000/users/auth/google/callback",
    jwt_secret:'codial'
}

const development = {
    name: "development",
    asset_path: './assets',
    session_cookie_key:"something",
    db:'codial_development',
    smtp:{
        service:'Gmail',
        host:'smtp.gmail.com',
        port:587,
        secure:false,
        auth:{
            user:'singhlavanya94',
            pass:'sudharana007!',
        }
    },
    google_client_id:"812632856780-j38fkr3n1vna34tcbmqtfv14endneh5p.apps.googleusercontent.com",
    google_client_secret:"xp24pTQMZtihmOnGALnLwjhd",
    google_call_back_url:"http://localhost:8000/users/auth/google/callback",
    jwt_secret:'codial'
}


module.exports = development;