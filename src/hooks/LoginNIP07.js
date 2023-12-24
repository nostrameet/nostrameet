import { useState } from 'react'
import { useNDK } from '@nostr-dev-kit/ndk-react'

export const useLoginNIP07 = () => {
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const { loginWithNip07 } = useNDK()

  async function connectExtension() {
    setLoading(true)
    const user = await loginWithNip07()
    if (user) {
      setResult(JSON.stringify(user, null, 2))
    }
    setLoading(false)
  }

  return { result, loading, connectExtension }
}
