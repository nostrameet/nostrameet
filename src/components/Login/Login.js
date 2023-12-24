import React from 'react'
import { Button } from 'react-bootstrap'
// import { useNDK } from '@nostr-dev-kit/ndk-react'
import { useLoginNIP07 } from 'hooks/LoginNIP07'

export default function LogInExtension() {
  const { result, loading, connectExtension } = useLoginNIP07()

  return (
    <>
      <Button onClick={() => connectExtension()} disabled={loading}>
        {loading ? '...' : 'Login'}
      </Button>

      {result && (
        <pre>
          <code>{result}</code>
        </pre>
      )}
    </>
  )
}
