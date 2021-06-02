import React, { useState } from "react"

import TokenForm from "../../components/TokenForm"
import UserInfo from "./UserInfo"

import * as S from "./styled"

const twitterFormat = (str) => str.toLowerCase().replace('@', '')

const GenerateToken: React.FC = ({
  onGenerated = () => {},
}) => {
  const [userInfo, setUserInfo] = useState(null)

  const handleSubmit = ({ dogname, twitter }) => {
    const key = new window.Bitcoin.ECKey(false)
    const publicKey = key.getBitcoinAddress()
    const secretKey = key.getBitcoinWalletImportFormat()
    const message = window.signMessage(twitterFormat(twitter), secretKey)
    const info = {
      dogname,
      message,
      publicKey,
      secretKey,
    }

    setUserInfo(info)
    onGenerated(info)
  }

  return (
    <>
      <TokenForm onSubmit={handleSubmit} />
      {userInfo && (<UserInfo {...userInfo} />)}
    </>
  )
}

export default GenerateToken
