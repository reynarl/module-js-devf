//views
let userMoneyView = document.getElementById('userMoney')
let userNameView = document.getElementById('userNameView')
let withdrawalView = document.getElementById('withdrawalView')
let depositView = document.getElementById('deposit') 
let transferView = document.getElementById('transfer')
let consultView = document.getElementById('consult')

let user = document.getElementById('user')
let pass = document.getElementById('pass')

let cuentas = [
  { name: 'Reyna', money: 100, password: '1234'},
  { name: 'Fernando', money: 200, password: '1010'},
  { name: 'Ichigo', money: 50, password: '5678'}
]

// localStorage.setItem("account",JSON.stringify(cuentas))
const account = JSON.parse(localStorage.getItem("account"))

//--------------------------------------------------------------------------
//Iniciar sesion y llevarlo a inicio
let btnSignIn = document.getElementById('btn-signIn')
let signInView = document.getElementById('signIn')
let signInMsg = document.getElementById('message')

let loggedView = document.getElementById('logged')
let userName = document.getElementById('userName')

btnSignIn.addEventListener('click', function signIn(){
  if (account.some(accounts => accounts.name === user.value && accounts.password === pass.value)){
    signInView.style.display = 'none'
    loggedView.style.display = 'block'
    userName.innerHTML = user.value
  }else{
    signInMsg.innerText = ('Usuario y/o contraseña incorrecta')
    signInMsg.setAttribute('class','alert alert-danger mt-1')
  }
  
  // if(user.value === account[0].name  && pass.value === account[0].password){
  //   signInView.style.display = 'none'
  //   loggedView.style.display = 'block'
  //   userName.innerHTML = account[0].name
  // }else if(user.value === account[1].name  && pass.value === account[1].password){
  //   signInView.style.display = 'none'
  //   loggedView.style.display = 'block'
  //   userName.innerHTML = account[1].name
  // }else if(user.value === account[2].name  && pass.value === account[2].password){
  //   signInView.style.display = 'none'
  //   loggedView.style.display = 'block'
  //   userName.innerHTML = account[2].name
  // }else{
  //   signInMsg.innerText = ('Usuario y/o contraseña incorrecta')
  //   signInMsg.setAttribute('class','alert alert-danger mt-1')
  // }
  //mostrar los movimientos de la cuenta al entrar
  if(user.value === account[0].name){
    for(let i = 0; i<bankRecord.length; i++){
      list = document.createElement('li')
      list.innerHTML = bankRecord[i]
      setConsult.appendChild(list)
    }
  }
  // if(user.value === account[1].name){
  //   for(let i = 0; i<bankRecordSecondAccount.length; i++){
  //     list = document.createElement('li')
  //     list.innerHTML = bankRecordSecondAccount[i]
  //     setConsult.appendChild(list)
  //   }
  // }
  // if(user.value === account[2].name){
  //   for(let i = 0; i<bankRecord_thirdAccount.length; i++){
  //     list = document.createElement('li')
  //     list.innerHTML = bankRecord_thirdAccount[i]
  //     setConsult.appendChild(list)
  //   }
  // }
})

//-------------------------------------------------------------------
//Escribir en pantalla contraseña
let numButton = document.getElementsByClassName('num-btn')
for(let i=0; i<numButton.length; i++){
  numButton[i].addEventListener('click', function(){
    setNum(numButton[i].value)
  })
}

function setNum(digit){
  pass.value = pass.value + digit
}

//-------------------------------------------------------------------
//Funcionalidad botones de los lados
let btnLeftRight = document.getElementsByClassName('btnLeftRight')
for(let i=0; i<btnLeftRight.length; i++){
  btnLeftRight[i].addEventListener('click', function(){
    selectOption(btnLeftRight[i].value)
  })
}

function selectOption(opc){
  if(account.some(accounts => accounts.name === user.value && accounts.password === pass.value)){
    switch(opc){
      case '1':
        withdrawalView.style.display ='none'
        userNameView.style.display = 'none'
        depositView.style.display = 'none'
        transferView.style.display = 'none'
        consultView.style.display = 'none'
        userMoneyView.style.display = 'block'
        consultar()
        break
      case '2':
        userNameView.style.display = 'none'
        userMoneyView.style.display = 'none'
        depositView.style.display = 'none'
        consultView.style.display = 'none'
        withdrawalView.style.display = 'block'
        transferView.style.display = 'none'
        break
      case '3':
        consultView.style.display = 'block'
        userNameView.style.display = 'none'
        userMoneyView.style.display = 'none'
        depositView.style.display = 'none'
        withdrawalView.style.display ='none'
        transferView.style.display = 'none'
        break
      case '4':
        userNameView.style.display = 'none'
        userMoneyView.style.display = 'none'
        withdrawalView.style.display ='none'
        transferView.style.display = 'none'
        consultView.style.display = 'none'
        depositView.style.display = 'block'
        break
      case '5':
        transferView.style.display = 'block'
        userNameView.style.display = 'none'
        userMoneyView.style.display = 'none'
        withdrawalView.style.display ='none'
        depositView.style.display = 'none'
        consultView.style.display = 'none'
        break
      case '6':
        salir = () => location.reload()
        salir()
        break
    }
  }else{
    signInMsg.innerText = ('No has iniciado sesión')
    signInMsg.setAttribute('class','alert alert-danger mt-1')
  }
}



//Opciones -------------------------------------------------------------
//Consultar Movimientos
let setConsult = document.getElementById('setConsult')
let bankRecords = []
let bankRecordsSecondAccount = []
let bankRecords_thirdAccount = []
let list
// localStorage.setItem('bankRecord', JSON.stringify(bankRecords))
// localStorage.setItem('bankRecordSecondAccount', JSON.stringify(bankRecordsSecondAccount))
// localStorage.setItem('bankRecord_thirdAccount', JSON.stringify(bankRecords_thirdAccount))
let bankRecord = JSON.parse(localStorage.getItem('bankRecord'))
let bankRecordSecondAccount = JSON.parse(localStorage.getItem('bankRecord__secondAccount'))
let bankRecord_thirdAccount = JSON.parse(localStorage.getItem('bankRecord__thirdAccount'))

//1. Consultar saldo ---------------------------------------------------

let setMoney = document.getElementById('setMoney')
function consultar(){
  if(user.value === account[0].name){
    setMoney.innerHTML = account[0].money
  }else if(user.value === account[1].name){
    setMoney.innerHTML = account[1].money
  }else if(user.value === account[2].name){
    setMoney.innerHTML = account[2].money
  }
}

//2. Retirar --------------------------------------------------------
//escribir monto dentro del input
// let inputMoneyR = document.getElementById('inputMoneyR')
// for(let j=0; j<numButton.length; j++){
//   numButton[j].addEventListener('click', function(){
//     setNumMoney(numButton[j].value)
//   })
// }
// function setNumMoney(digito){
//   inputMoneyR.value = inputMoneyR.value + digito
//   console.log(inputMoneyR.value)
// }
//
let setWithdrawalMsg = document.getElementById('setWithdrawalMsg')
let inputMoneyR = document.getElementById('inputMoneyR')

function retiraMonto(){
  let montoFinal
  let montoIngresado = inputMoneyR.value

  errorMessage = () =>{
    setWithdrawalMsg.innerHTML = '<br><b>No puedes realizar retiros<br>Tu saldo en la cuenta no puede ser menor a $10</b>'
    setWithdrawalMsg.style.color = 'red'
    inputMoneyR.value = ""
    setTimeout(message = () => setWithdrawalMsg.innerHTML = "", 4000)
  }
  successMessage = () =>{
    localStorage.setItem("account",JSON.stringify(account))
    setWithdrawalMsg.innerHTML = '<br><b>¡Retiro realizado con éxito!</b>'
    setWithdrawalMsg.style.color = 'green'
    inputMoneyR.value = ""
    setTimeout(message = () => setWithdrawalMsg.innerHTML = "", 1000)
  }

  saveMoves = (money) =>{
    list = document.createElement('li'),
    list.innerHTML = `Se realizó un retiro de $${money}`,
    bankRecord.push(list.innerHTML)
    setConsult.appendChild(list)
    localStorage.setItem('bankRecord', JSON.stringify(bankRecord))
  }
  saveMoves_secondA = (money) =>{
    list = document.createElement('li'),
    list.innerHTML = `Se realizó un retiro de $${money}`,
    // bankRecordSecondAccount.push(list.innerHTML)
    setConsult.appendChild(list)
    // localStorage.setItem('bankRecordSecondAccount', JSON.stringify(bankRecordSecondAccount))
  }
  saveMoves_thirdA = (money) =>{
    list = document.createElement('li'),
    list.innerHTML = `Se realizó un retiro de $${money}`,
    // bankRecord_thirdAccount.push(list.innerHTML)
    setConsult.appendChild(list)
    // localStorage.setItem('bankRecord_thirdAccount', JSON.stringify(bankRecord_thirdAccount))
  }
  //Retirar desde la primera cuenta
  if (user.value === account[0].name){
    montoFinal = parseInt(account[0].money) - parseInt(montoIngresado)
    montoFinal < 10 ? errorMessage()
    : (
      account[0].money = montoFinal,
      successMessage(), 
      saveMoves(montoIngresado)
    )
  }
  //Retirar desde la segunda cuenta
  else if (user.value === account[1].name){
    montoFinal = parseInt(account[1].money) - parseInt(montoIngresado)
    montoFinal < 10 ? errorMessage()
    : (
      account[1].money = montoFinal,
      successMessage(),
      saveMoves_secondA(montoIngresado)
    )
  }
  //Retirar desde la tercera cuenta
  else if (user.value === account[2].name){
    montoFinal = parseInt(account[2].money) - parseInt(montoIngresado)
    montoFinal < 10 ? errorMessage()
    : (
      account[2].money = montoFinal,
      successMessage(),
      saveMoves_thirdA(montoIngresado)
    )
  }
}

//Depositar ------------------------------------------------
let inputMoneyDeposit = document.getElementById('inputMoneyDeposit')
let setDepositMsg = document.getElementById('setDepositMsg')

function deposit(){
  let montoFinal
  let inputDeposit = inputMoneyDeposit.value

  errorMessage = () => {
    setDepositMsg.innerHTML = '<br><b>No puedes depositar<br>Tu saldo en la cuenta no puede ser mayor a $990</b>'
    setDepositMsg.style.color = 'red'
    inputMoneyDeposit.value = ""
    setTimeout(message = () =>  setDepositMsg.innerHTML = "", 4000)
  }
  successMessage = () => {
    localStorage.setItem("account",JSON.stringify(account))
    setDepositMsg.innerHTML = '<br><b>¡Depósito realizado con éxito!</b>'
    setDepositMsg.style.color = 'green'
    inputMoneyDeposit.value = ""
    setTimeout(message = () => setDepositMsg.innerHTML = "", 2000)
  }

  saveMoves = (money) =>{
    list = document.createElement('li'),
    list.innerHTML = `Se realizó un depósito de $${money}`,
    bankRecord.push(list.innerHTML)
    setConsult.appendChild(list)
    localStorage.setItem('bankRecord', JSON.stringify(bankRecord))
  }
  saveMoves_secondA = (money) =>{
    list = document.createElement('li')
    list.innerHTML = `Se realizó un depósito de $${money}`
    // bankRecordSecondAccount.push(list.innerHTML),
    setConsult.appendChild(list)
    // localStorage.setItem('bankRecordSecondAccount', JSON.stringify(bankRecordSecondAccount))
  }
  saveMoves_thirdA = (money) =>{
    list = document.createElement('li'),
    list.innerHTML = `Se realizó un depósito de $${money}`,
    // bankRecord_thirdAccount.push(list.innerHTML)
    setConsult.appendChild(list)
    // localStorage.setItem('bankRecord_thirdAccount', JSON.stringify(bankRecord_thirdAccount))
  }
  //Depositar desde la primera cuenta
  if (user.value === account[0].name){
    montoFinal = parseInt(account[0].money) + parseInt(inputDeposit)
    montoFinal > 990 ? errorMessage()
    : (
      account[0].money = montoFinal,
      successMessage(), saveMoves(inputDeposit)
    )
  }
  //Depositar desde la segunda cuenta
  if (user.value === account[1].name){
    montoFinal = parseInt(account[1].money) + parseInt(inputDeposit)
    montoFinal > 990 ? errorMessage()
    : (
      account[1].money = montoFinal,
      successMessage(), saveMoves_secondA(inputDeposit)
    )
  }
  //Depositar desde la tercera cuenta
  if (user.value === account[2].name){
    montoFinal = parseInt(account[2].money) + parseInt(inputDeposit)
    montoFinal > 990 ? errorMessage()
    : (
      account[2].money = montoFinal,
      successMessage(), saveMoves_thirdA(inputDeposit)
    )
  }
}

//Transferir -----------------------------------------------
let inputUserTransfer = document.getElementById('inputUserNameTransfer')
let inputMoneyTransfer = document.getElementById('inputMoneyTransfer')
let setTransferMsg = document.getElementById('setTransferMsg')

transfer = () => {
  let moneyTransfer
  let inputMoneyT = inputMoneyTransfer.value

  errorMessage = () => {
    setTransferMsg.innerHTML = `<b>La cuenta sobrepasa el límite <br> Intenta de nuevo</b>`
    setTransferMsg.style.color = 'red'
    inputMoneyTransfer.value = ""
    inputUserTransfer.value = ""
    setTimeout(message = () => setTransferMsg.innerHTML = "", 4500)
  }
  errorMessageAccountMoney = () => {
    setTransferMsg.innerHTML = `<b>Tu cuenta no puede tener menos de $10<br>Intenta de nuevo</b>`
    setTransferMsg.style.color = 'red'
    inputMoneyTransfer.value = ""
    inputUserTransfer.value = ""
    setTimeout(message = () => setTransferMsg.innerHTML = "", 4000)
  }
  errorM = () => {
    setTransferMsg.innerHTML = `<b>No puedes transferir a tu misma cuenta</b>`
    setTransferMsg.style.color = 'red'
    inputMoneyTransfer.value = ""
    inputUserTransfer.value = ""
    setTimeout(message = () => setTransferMsg.innerHTML = "", 4500)
  }
  successMessage = () => {
    localStorage.setItem("account",JSON.stringify(account))
    setTransferMsg.innerHTML = `<b>¡Transeferencia realizada con éxito!</b>`
    setTransferMsg.style.color = 'green'
    inputMoneyTransfer.value = ""
    inputUserTransfer.value = ""
    setTimeout(message = () => setTransferMsg.innerHTML = "", 3000)
  }

  saveMoves = (money,user) =>{
    list = document.createElement('li'),
    list.innerHTML = `Se realizó una transferencia de $${money} a ${user}`,
    bankRecord.push(list.innerHTML)
    setConsult.appendChild(list)
    localStorage.setItem('bankRecord', JSON.stringify(bankRecord))
  }
  saveMoves_secondA = (money,user) =>{
    list = document.createElement('li'),
    list.innerHTML = `Se realizó una transferencia de $${money} a ${user}`,
    // bankRecordSecondAccount.push(list.innerHTML)
    setConsult.appendChild(list)
    // localStorage.setItem('bankRecordSecondAccount', JSON.stringify(bankRecordSecondAccount))
  }
  saveMoves_thirdA = (money,user) =>{
    list = document.createElement('li'),
    list.innerHTML = `Se realizó una transferencia de $${money} a ${user}`,
    // bankRecord_thirdAccount.push(list.innerHTML)
    setConsult.appendChild(list)
    // localStorage.setItem('bankRecord_thirdAccount', JSON.stringify(bankRecord_thirdAccount))
  }

  if(user.value === account[0].name){
    //Transferir desde la cuenta[0] a -> cuenta[1] y cuenta[2]
    if(inputUserTransfer.value !== account[0].name){
      //transferir a cuenta[1]
      if(inputUserTransfer.value === account[1].name){
        moneyTransfer = parseInt(account[1].money) + parseInt(inputMoneyTransfer.value)
        moneyTransfer > 990 ? errorMessage()
        : (
          account[1].money = moneyTransfer,
          account[0].money = parseInt(account[0].money) - parseInt(inputMoneyTransfer.value),
          account[0].money < 10 ? errorMessageAccountMoney()
          : successMessage(), saveMoves(inputMoneyT, account[1].name)
        )
      }
      //transferir a cuenta[2]
      if(inputUserTransfer.value === account[2].name){
        moneyTransfer = parseInt(account[2].money) + parseInt(inputMoneyTransfer.value)
        moneyTransfer > 990 ? errorMessage()
        : (
          account[2].money = moneyTransfer,
          account[0].money = parseInt(account[0].money) - parseInt(inputMoneyTransfer.value),
          account[0].money < 10 ? errorMessageAccountMoney()
          : successMessage(), saveMoves(inputMoneyT, account[2].name)
        )
      }
    }else{errorM()}
  }
  //Transferir desde la cuenta[1] a -> cuenta[0] y cuenta[2]
  if(user.value === account[1].name){
    if(inputUserTransfer.value !== account[1].name){
      //transferir a cuenta[0]
      if(inputUserTransfer.value === account[0].name){
        moneyTransfer = parseInt(account[0].money) + parseInt(inputMoneyTransfer.value)
        moneyTransfer > 990 ? errorMessage()
        : (
          account[0].money = moneyTransfer,
          account[1].money = parseInt(account[1].money) - parseInt(inputMoneyTransfer.value),
          account[1].money < 10 ? errorMessageAccountMoney()
          : successMessage(), saveMoves_secondA(inputMoneyT, account[0].name)
        )
      }
      //transferir a cuenta[2]
      if(inputUserTransfer.value === account[2].name){
        moneyTransfer = parseInt(account[2].money) + parseInt(inputMoneyTransfer.value)
        moneyTransfer > 990 ? errorMessage()
        : (
          account[2].money = moneyTransfer,
          account[1].money = parseInt(account[1].money) - parseInt(inputMoneyTransfer.value),
          account[1].money < 10 ? errorMessageAccountMoney()
          : successMessage(), saveMoves_secondA(inputMoneyT, account[2].name)
        )
      }
    }else{errorM()}
  }
  //Transferir desde la cuenta[2] a -> cuenta[0] y cuenta[1]
  if(user.value === account[2].name){
    if(inputUserTransfer.value !== account[2].name){
      //transferir a cuenta[0]
      if(inputUserTransfer.value === account[0].name){
        moneyTransfer = parseInt(account[0].money) + parseInt(inputMoneyTransfer.value)
        moneyTransfer > 990 ? errorMessage()
        : (
          account[0].money = moneyTransfer,
          account[2].money = parseInt(account[2].money) - parseInt(inputMoneyTransfer.value),
          account[2].money < 10 ? errorMessageAccountMoney()
          : successMessage(), saveMoves_thirdA(inputMoneyT, account[0].name)
        )
      }
      //transferir a cuenta[1]
      if(inputUserTransfer.value === account[1].name){
        moneyTransfer = parseInt(account[1].money) + parseInt(inputMoneyTransfer.value)
        moneyTransfer > 990 ? errorMessage()
        : (
          account[1].money = moneyTransfer,
          account[2].money = parseInt(account[2].money) - parseInt(inputMoneyTransfer.value),
          account[2].money < 10 ? errorMessageAccountMoney()
          : successMessage(), saveMoves_thirdA(inputMoneyT, account[1].name)
        )
      }
    }else{errorM()}
  }
}