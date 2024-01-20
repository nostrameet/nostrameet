import { useState } from 'react'
import { useNDK } from '@nostr-dev-kit/ndk-react'

export const useLoginNIP07 = () => {
  const [result, setResult] = useState({})
  const [loading, setLoading] = useState(false)

  const { loginWithNip07 } = useNDK()

  async function connectExtension() {
    setLoading(true)
    try {
      const user = await loginWithNip07()
      if (user) {
        setResult(user)
      }
    } catch (e) {
      console.log('e', e)
    }

    setLoading(false)
  }

  return { result, loading, connectExtension }
}
