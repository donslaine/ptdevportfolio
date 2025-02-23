import Link from 'next/link'

const Logo = ({ variant, className }) => {
  return (
    <Link href="/">
      <a className={`inline-block leading-0 ${className ?? ''}`}>
        <img width={50} height={55} src={`/images/pT2.png`} />
      </a>
    </Link>
  )
}

Logo.defaultProps = {
  variant: 'light',
}

export default Logo
