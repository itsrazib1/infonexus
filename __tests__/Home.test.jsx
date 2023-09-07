import { render, screen } from "@testing-library/react";
import Footer from "@/Component/Footer/Footer";
import PartOne from "@/Component/HomePage/PartOne/PartOne";
import PartTwo from "@/Component/HomePage/PartTwo/PartTwo";
import PartThree from "@/Component/HomePage/PartThree/PartThree";

 
describe("Page", () => {
    it("should Have Footer text", () => {
        render(<Footer />) //ARRANG
        const myElem = screen.getByText(/Ready/) //ACT
        expect(myElem).toBeInTheDocument()
    })
    it("should Have PartOne text", () => {
        render(<PartOne />) //ARRANG
        const myElem1 = screen.getByText(/powered/) //ACT
        expect(myElem1).toBeInTheDocument()
    })
    it("should Have PartTwo text", () => {
        render(<PartTwo />) //ARRANG
        const myElem1 = screen.getByText(/Infonexus/) //ACT
        expect(myElem1).toBeInTheDocument()
    })
    it("should Have PartThree text", () => {
        render(<PartThree />) //ARRANG
        const myElem1 = screen.getByText(/Software/) //ACT
        expect(myElem1).toBeInTheDocument()
    })
    
}) 