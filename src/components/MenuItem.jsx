
export default function MenuItem({children, linkTo}) {
  return (
    <div>
      <a href={`#${linkTo}`}>
        {children}
      </a>
    </div>
  )
}