import { Account, connect, Contract, keyStores, WalletConnection } from "near-api-js"
import { APP_ENV, CONTRACT_NAME, getConfig } from "./config"

const nearConfig = getConfig(APP_ENV)

export class NearApi {

    walletConnection?: WalletConnection
    account?: Account
    contract?: any

    init = false

    async initContract() {
        const keyStore = new keyStores.BrowserLocalStorageKeyStore()

        const near = await connect({
            ...nearConfig,
            keyStore,
            headers: {}
        })

        const walletConnection = new WalletConnection(near, null)

        const account = walletConnection.account()

        const contract = new Contract(walletConnection.account(), CONTRACT_NAME, {
            viewMethods: ['get_greeting'],
            changeMethods: ['set_greeting'],
        })


        this.walletConnection = walletConnection
        this.account = account
        this.contract = contract

        this.init = true
    }

    logout() {
        this.walletConnection!.signOut()
        window.location.replace(window.location.origin + window.location.pathname)
    }

    login() {
        this.walletConnection!.requestSignIn(CONTRACT_NAME)
    }
}


const near = new NearApi()

export default near
