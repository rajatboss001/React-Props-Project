
const Heading = ({ start, subheading, end}) => {
  return (
    <h1 className='text-white font-normal text-center text-custom-5xl'>{start}
      <span className="bg-linear-to-r from-wave-start to-wave-end bg-clip-text mt-3.25 mb-5 text-transparent">{subheading}</span>
      <span className="block">{end}</span>
    </h1>
  )
}

export default Heading
