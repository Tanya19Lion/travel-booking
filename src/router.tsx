import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/home-page";
import ListingDetailsPage from "./pages/listing-details-page";
import NotFoundPage from "./pages/not-found-page";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<HomePage />} />
                    <Route path="/listings/:listingId" element={<ListingDetailsPage />} /> 
                </Route> 
                <Route path="*" element={<NotFoundPage />}/>               
            </Routes>
        </BrowserRouter>
    );
}

export default Router;