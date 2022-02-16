import React from 'react'
import pkg from '~/../package.json'

export const Copyright: React.FC = () => {
  return (
    <div>
      <div className="text-center text-xs">
        <p>Copyright &copy; {new Date().getFullYear()} {pkg.author.name} All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Copyright
