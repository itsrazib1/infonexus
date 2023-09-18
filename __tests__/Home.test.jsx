import { render, screen } from "@testing-library/react";
import Footer from "@/Component/Footer/Footer";
import PartTwo from "@/Component/HomePage/PartTwo/PartTwo";
import PartThree from "@/Component/HomePage/PartThree/PartThree";
import BannerSection from "@/Component/HomePage/PartOne/BannerSection";
import Error from "@/app/error";
import Notfound from "@/app/not-found";
import ShowVideo from "@/app/showVideo/ShowVideo";
import Browsers from "@/app/allBrowsers/Browsers";
import Info_One from "@/app/all-product/Fullpage/PartFour/Info_One";
import PartFour from "@/app/all-product/Fullpage/PartFour/PartFour";
import Bianalytics from "@/app/all-product/Fullpage/partSix/bianalytics";
import Developerplatform from "@/app/all-product/Fullpage/partSix/developerplatform";
import EmailCollaboration from "@/app/all-product/Fullpage/partSix/EmailCollaboration";
import Finance from "@/app/all-product/Fullpage/partSix/Finance";
import Hr from "@/app/all-product/Fullpage/partSix/hr";
import Legal from "@/app/all-product/Fullpage/partSix/Legal";
import Marketing from "@/app/all-product/Fullpage/partSix/Marketing";
import ProjectManagement from "@/app/all-product/Fullpage/partSix/projectManagement";
import Sales from "@/app/all-product/Fullpage/partSix/Sales";
import SecurityITManagement from "@/app/all-product/Fullpage/partSix/securityITManagement";
import Service from "@/app/all-product/Fullpage/partSix/Service";


 
describe("Page", () => {
    it("should Have Footer text", () => {
        render(<Footer />) //ARRANG
        const myElem = screen.getByText(/Ready/) //ACT
        expect(myElem).toBeInTheDocument()
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
    it("should Have PartTwo text", () => {
        render(<PartTwo />) //ARRANG
        const myElem1 = screen.getByText(/Infonexus/) //ACT
        expect(myElem1).toBeInTheDocument()
    })
    it("should Have BannerSection text", () => {
        render(<BannerSection />) //ARRANG
        const myElem1 = screen.getByText(/SPOTLIGHT/) //ACT
        expect(myElem1).toBeInTheDocument()
    })
    it("should Have Error text", () => {
        render(<Error />) //ARRANG
        const myElem1 = screen.getByText(/404/) //ACT
        expect(myElem1).toBeInTheDocument()
    })
    it("should Have Notfound text", () => {
        render(<Notfound />) //ARRANG
        const myElem1 = screen.getByText(/Page/) //ACT
        expect(myElem1).toBeInTheDocument()
    })
    it("should Have ShowVideo text", () => {
        render(<ShowVideo />) //ARRANG
        const myElem1 = screen.getByText(/Service/) //ACT
        expect(myElem1).toBeInTheDocument()
    })
    it("should Have Browsers text", () => {
        render(<Browsers />) //ARRANG
        const myElem1 = screen.getByText(/Find/) //ACT
        expect(myElem1).toBeInTheDocument()
    })
    it("should Have Info_One text", () => {
        render(<Info_One />) //ARRANG
        const myElem1 = screen.getByText(/suite/) //ACT
        expect(myElem1).toBeInTheDocument()
    })
    it("should Have PartFour text", () => {
        render(<PartFour />) //ARRANG
        const myElem1 = screen.getByText(/Suites/) //ACT
        expect(myElem1).toBeInTheDocument()
    })
    it("should Have Bianalytics text", () => {
        render(<Bianalytics />) //ARRANG
        const myElem1 = screen.getByText(/Analytics/) //ACT
        expect(myElem1).toBeInTheDocument()
    })
    it("should Have Developerplatform text", () => {
        render(<Developerplatform />) //ARRANG
        const myElem1 = screen.getByText(/Developer/) //ACT
        expect(myElem1).toBeInTheDocument()
    })
    it("should Have EmailCollaboration text", () => {
        render(<EmailCollaboration />) //ARRANG
        const myElem1 = screen.getByText(/Email/) //ACT
        expect(myElem1).toBeInTheDocument()
    })
    it("should Have Finance text", () => {
        render(<Finance />) //ARRANG
        const myElem1 = screen.getByText(/Finance/) //ACT
        expect(myElem1).toBeInTheDocument()
    })
    it("should Have Hr text", () => {
        render(<Hr />) //ARRANG
        const myElem1 = screen.getByText(/Hire/) //ACT
        expect(myElem1).toBeInTheDocument()
    })
    it("should Have Legal text", () => {
        render(<Legal />) //ARRANG
        const myElem1 = screen.getByText(/Streamline/) //ACT
        expect(myElem1).toBeInTheDocument()
    })
    it("should Have Marketing text", () => {
        render(<Marketing />) //ARRANG
        const myElem1 = screen.getByText(/Engage/) //ACT
        expect(myElem1).toBeInTheDocument()
    })
    it("should Have ProjectManagement text", () => {
        render(<ProjectManagement />) //ARRANG
        const myElem1 = screen.getByText(/Choose/) //ACT
        expect(myElem1).toBeInTheDocument()
    })
    it("should Have Sales text", () => {
        render(<Sales />) //ARRANG
        const myElem1 = screen.getByText(/Help/) //ACT
        expect(myElem1).toBeInTheDocument()
    })
    it("should Have SecurityITManagement text", () => {
        render(<SecurityITManagement />) //ARRANG
        const myElem1 = screen.getByText(/Security/) //ACT
        expect(myElem1).toBeInTheDocument()
    })
    it("should Have Service text", () => {
        render(<Service />) //ARRANG
        const myElem1 = screen.getByText(/Empower/) //ACT
        expect(myElem1).toBeInTheDocument()
    })
    
}) 