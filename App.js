import { useState } from 'react'

// import stacks
import SignedInStack from './screens/navigation/SignedInStack'
import SignedOutStack from './screens/navigation/SignedOutStack'

function App(){
  const [isSignedIn, setIsSignedIn] = useState(false)

return isSignedIn ? <SignedInStack /> : <SignedOutStack setIsSignedIn={setIsSignedIn} />

}

export default App