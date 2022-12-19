import React from 'react'

const ListingItem = ({listing, id}) => {
  return (
    <div>
        <p>{listing.name}</p>
    </div>
  )
}

export default ListingItem;