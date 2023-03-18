import React from 'react'
import { Link } from 'gatsby'

import { getFormattedDate } from '../utils/helpers'

export const Post = ({ node, prefix, newspaper }) => {
  let formattedDate = new Date(node.date)
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const monthName = months[formattedDate.getMonth()]
  

  formattedDate = monthName + ' ' + formattedDate.getDate()

////  if (node.date) {
////    if (!newspaper) {
////      const dateArr = node.date.split(' ')
////      dateArr.pop()
////
////      dateArr[0] = dateArr[0].slice(0, 3)
////      formattedDate = dateArr.join(' ').slice(0, -1)
////    } else {
////      formattedDate = getFormattedDate(node.date)
////    }
////  }

  return (
    <Link
      to={node.slug}
      key={node.id}
      className="post"
    >
      <h3>{node.title}</h3>
      <time>{formattedDate}</time>
    </Link>
    )
  
}
