const usuariosDB = [
    {email: 'admin@mail.com', pass: '1234'},
    {email: 'user1@mail.com', pass: '4321'},
    {email: 'user2@mail.com', pass: '2143'},
]

export function login(emailForm, passForm){
    const userMatch = usuariosDB.find(u=> u.email === emailForm &&
        u.pass === passForm)

    if(userMatch){
        return userMatch
    }
    else{
        return null
    }
}