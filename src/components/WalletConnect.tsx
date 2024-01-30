"use client"
import { useWeb3ModalState } from "@web3modal/wagmi1/react"
import { Fragment } from "react"
import { useAccount } from "wagmi"

const WalletConnect = () => {
  const { address, isConnecting, isDisconnected } = useAccount()

    return <Fragment>
        <w3m-button balance="hide"/>
    </Fragment>
}

export default WalletConnect