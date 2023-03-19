import Shape from './Shape'
import Portfolio from './Portfolio'
import { useEffect, useState } from 'react'
import SectionTitle from './SectionTitle'
import portfolios from '../data/portfolios.json'
import { pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

const Resume = () => {
  return (
    <section
      className=" relative pt-[100px] pb-[100px] lg:pb-[200px]"
      id="resume"
    >
      <div className="container">
        <SectionTitle title="Resume" />
        <div className="">
          <iframe
            width="100%"
            height="500px"
            src="/pdfs/Paul-Truitt-Dev-Resume.pdf"
          />
        </div>
      </div>
      <Shape fillColor="#F9FAFB" />
    </section>
  )
}

export default Resume
