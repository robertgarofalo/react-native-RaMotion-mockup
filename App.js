import { useState, createContext } from 'react'

// import stacks
import SignedInStack from './screens/navigation/SignedInStack'
import SignedOutStack from './screens/navigation/SignedOutStack'

// export const AuthContext = createContext(null)

function App(){
  const [isSignedIn, setIsSignedIn] = useState(false)

return isSignedIn ? <SignedInStack setIsSignedIn={setIsSignedIn} /> : <SignedOutStack setIsSignedIn={setIsSignedIn} />

// return (
//   // <AuthContext.Provider value={{isSignedIn, setIsSignedIn}}>
//   <AuthContext.Provider value={setIsSignedIn}>
//     {isSignedIn ? <SignedInStack /> : <SignedOutStack setIsSignedIn={setIsSignedIn} />}
//   </AuthContext.Provider>
// )

}

export default App