import Button from "./Button"
import Tags from "./Tags"
import Heading from "./Heading"
import Praghraph from "./Praghraph"
import Bgpurpule from  "../../assets/bg-purple.svg"
const Section = ({tag, start, subheading, end, line1, line2,buttonText, buttonLink, bgImg = Bgpurpule, }) => {
  return (
    <div className="bg-black min-h-screen flex justify-center items-center overflow-hidden">
      <section className="w-full relative px-5">
        <div 
          className="container-hero min-h-161 pt-54.75 pb-25 rounded-[20px] max-w-7xl w-full mx-auto bg-center bg-no-repeat bg-size-[1280px_644px]"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
            <div className="row-hero flex flex-col items-center max-w-222 mx-auto">
                <Tags text={tag} />
                <Heading start={start} subheading={subheading} end={end} />
                <Praghraph line1={line1} line2={line2} />
                <Button text={buttonText} link={buttonLink} />
            </div>
        </div>
      </section>
    </div>
  )
}

export default Section
