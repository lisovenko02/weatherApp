'use client'

import Loader from './components/common/Loader'

export default function Loading() {
  return (
    <div className="loading-screen">
      <Loader isLoading={true} />
    </div>
  )
}
