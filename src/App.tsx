import near from "./near"


const App: React.FC = () => {
  if (!near.init) return <></>

  if (near.walletConnection?.isSignedIn()) {
    return (
      <div>
        <div>
          Hello {near.account?.accountId}
        </div>
        <div>
          <button onClick={() => near.logout()}>Logout</button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <button onClick={() => near.login()}>Login</button>
    </div>
  )
}


export default App