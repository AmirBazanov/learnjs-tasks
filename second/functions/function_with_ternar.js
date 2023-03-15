const checkAge = age=> {
    return (age > 18) ? true : console.log('Родители разрешили?')
}

const checkAge2=age=>{
    return (age > 18) || console.log('Родители разрешили?')
}