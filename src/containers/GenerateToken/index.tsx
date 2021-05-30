import React, { useState } from "react"

import TokenForm from "../../components/TokenForm"
import UserInfo from "./UserInfo"

import * as S from "./styled"

const GenerateToken: React.FC = ({
  onGenerated = () => {},
}) => {
  const [userInfo, setUserInfo] = useState(null)

  const generateKey = ({ dogname, twitter }) => {
    const key = new window.Bitcoin.ECKey(false)
    const publicKey = key.getBitcoinAddress()
    const secretKey = key.getBitcoinWalletImportFormat()
    const message = window.signMessage(twitter, secretKey)
    const info = {
      dogname,
      message,
      publicKey,
      secretKey,
      twitter,
    }

    setUserInfo(info)
    onGenerated(info)
  }

  const handleSubmit = ({ dogname, twitter }) => {
    if ( !window.Bitcoin ) {
      window.addEventListener('load', () => {
        generateKey({ dogname, twitter })
      });
    } else {
      generateKey({ dogname, twitter })
    }
  }

  return (
    <>
      <TokenForm onSubmit={handleSubmit} />
      {userInfo && (<UserInfo {...userInfo} />)}
    </>
  )
}

export default GenerateToken
