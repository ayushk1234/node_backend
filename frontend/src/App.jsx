import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import axios from 'axios'
import Card from './components/Card'
import PasswordGenerator from './components/PasswordGenerator'
import Form from './components/Form'
import { InputBox } from './components'
import useCurrencyInfo from './components/useCurrencyInfo'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import UserContext from './context/Usercontext'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import { ThemeProvider } from './ThemeContext/theme'
import ThemeBtn from './components/ThemeBtn'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import Counter from './components/counter/Counter'
import Register from './authLogin/Register'


function App() {
  const [count, setCount] = useState('olive')

  const [amount,setAmount]=useState(0)
  const [from,setFrom]=useState("usd")
  const [to,setTo]=useState("inr")
  const [converted,setConverted]=useState(0)


  // const currenyInfo =  useCurrencyInfo(from)

  // console.log(currenyInfo)

  // const options = Object.keys(currenyInfo)

  // const swap =()=>{
  //   setFrom(to)
  //   setTo(from)
  //   setConverted(amount)
  //   setAmount(converted)
  // }

  // const convert = () =>{
  //   setConverted(amount*currenyInfo[to])}
  // const changeBg = ()=>{
  //   // 
  // }

  // useEffect(()=>{
  //   axios.get("/api/jokes")
  //   .then((response )=>{
  //     setCount(response.data)
  //   })
  //   .catch((error)=>{
  //     console.log(error)
  //   })
  // })

//   return (
//     <div>
//     {/* // < div className='w-full h-screen duration-200' style={{backgroundColor:count}}> */}
//       {/* <h1 className='bg-green-400 text-black p-4'>hi</h1> */}
//       {/* <Card/> */}
//       {/* <PasswordGenerator/> */}
//       {/* <Form/> */}
//       {/* <div className='fixed flex ' style={{backgroundColor:count}}>hgghiu</div>
//       <button onClick={()=>setCount('red')}>"White"</button> */}


//       {/* {
//         count.map((joke,index)=>{
//           return (<div key={[joke.id]}>
//             <h3>{joke.id}</h3>
//             <h3>{joke.content}</h3>
//           </div>)
//         })
//       } */}

// <div
//             className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
//             // style={{
//             //     backgroundImage: `url('${BackgroundImage}')`,
//             // }}
//         >
//             <div className="w-full">
//                 <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
//                     <form
//                         onSubmit={(e) => {
//                             e.preventDefault();
//                             convert()
                           
//                         }}
//                     >
//                         <div className="w-full mb-1">
//                             <InputBox
//                                 label="From"
//                                 amount={amount}
//                                 currencyOption={options}
//                                 onCurrencyChange={(currency)=>setAmount(amount)}
//                                 selectCurrency={from}
//                                 onAmountChange={(amount)=>setAmount(amount)}
                                
//                             />
//                         </div>
//                         <div className="relative w-full h-0.5">
//                             <button
//                                 type="button"
//                                 className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
//                                 onClick={swap}
//                             >
//                                 swap
//                             </button>
//                         </div>
//                         <div className="w-full mt-1 mb-4">
//                             <InputBox
//                                 label="To"
                               
//                                 amount={converted}
//                                 currencyOption={options}
//                                 onCurrencyChange={(currency)=>setTo(currency)}
//                                 selectCurrency={from}
                                
//                             />
//                         </div>
//                         <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
//                             Convert {from.toUpperCase()} to {to.toUpperCase()}
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
       
//     </div>
//   )

// return(
//   <UserContextProvider>
//     <h1>hi app</h1>
//     <Login/>
//     <Profile/>

//   </UserContextProvider>
// )


const [themeMode,setThemeMode]=useState("light")

const lightTheme=()=>{
  setThemeMode("light")
}

const darkTheme = ()=>{
  setThemeMode("dark")

}

// useEffect(()=>{
//   document.querySelector('html').classList.remove("light","dark")
//   document.querySelector('html').classList.add(themeMode)
// },[themeMode])

// return(
//   <ThemeProvider value={{themeMode,lightTheme,darkTheme }}>

//     <div className="flex flex-wrap min-h-screen items-center">
//                 <div className="w-full">
//                     <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
//                       <ThemeBtn/>
                        
//                     </div>

//                     <div className="w-full max-w-sm mx-auto">
//                        <Card/>
//                     </div>
//                 </div>
//     </div>

//   </ThemeProvider>

// )


// return(
//   <div>
//     <AddTodo/>
//     <Todos/>
//     <Counter/>
//   </div>
// )
// return(
//   <div>
//     <Router>
//       <Routes>
//         <Route path="/" element ={<Home/>}/>
        
//       </Routes>
//     </Router>
//   </div>
// )


return(
  <div>
    <Register/>
  </div>
)
}

export default App
