import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    const [productline, setProductLine] = useState();
    const [productplan, setProductPlan] = useState();
    const [addoption, setAddOption] = useState();
    const [pricedollor, setPriceDollor] = useState();
    const [dPercenatge, setDPercenatge] = useState();
    const [packagename, setPackageName] = useState();
    const [saasalert, setSaasAlert] = useState();
    const [alertStatus, setAlertStatus] = useState("");
    const [error, setError] = useState("1")

    // custam pakage calculation start from here 
    const totalPrice = parseInt(addoption) + parseInt(pricedollor) + (productline === "1" ? parseInt(productplan) : 0);
    console.log("total price", totalPrice);
    console.log("sassAlertMargin", pricedollor);
    const microsoftAddOnMargin = (addoption === "9" ? ((addoption) / 100 * (dPercenatge))?.toFixed(3) : 0);
    console.log("microsoftAddOnMargin", microsoftAddOnMargin);
    const microsoftBaseMargin = (productline === "1" ? (parseInt(productplan) / 100 * (dPercenatge))?.toFixed(3) : 0)
    console.log("microsoftBaseMargin", microsoftBaseMargin);
    const totalMarginDollar = (microsoftAddOnMargin ? (parseFloat(microsoftAddOnMargin)) : 0) + (saasalert ? (parseFloat(saasalert)) : 0) + (microsoftBaseMargin ? (parseFloat(microsoftBaseMargin)) : 0)
    console.log("totalMarginDollar", totalMarginDollar?.toFixed(2));
    const totalMarginParcent = (totalMarginDollar / totalPrice * 100)?.toFixed(2);
    const totalMarginParcent2 = (microsoftAddOnMargin / totalPrice * 100)?.toFixed(2);
    console.log("totalMarginParcent", totalMarginParcent, totalMarginParcent2);
    //  End Here 
    const submit = () => {
        if (!productplan) {
            setError("2")
        } else if (!productplan) {
            setError("2")
        } else if (!addoption) {
            setError("2")
        } else if (!dPercenatge) {
            setError("2")
        } else if (!packagename) {
            setError("2")
        } else if (!saasalert) {
            setError("2")
        } else {
            setError("3")
        }
    }

    const takeData = (data) => {
        setSaasAlert(data - .50)
        if (data) {
            setPriceDollor(data)
        }
    }
    const statusData = (data) => {
        setAlertStatus(data)
        if (data === 0) {
            setPriceDollor(0)
        }
    }
    console.log("ssassAlaert data", saasalert, pricedollor, alertStatus);
    const customState = { totalPrice: totalPrice, sassAlertMargin: saasalert, microsoftAddOnMargin: microsoftAddOnMargin, microsoftBaseMargin: microsoftBaseMargin, totalMarginDollar: totalMarginDollar, totalMarginParcent: totalMarginParcent }
    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <section className="intro">
                        <div className="row g-4 align-middle">
                            <div className="col-sm-12 col-md-6 columns">
                                <h1>Protect &amp; Monetize Your Clients' SaaS Applications</h1>
                                <p>MSP Exclusive Platform for Unified Monitoring and Alerting of Core Business SaaS Applications.</p>
                                <button class="btn btn-primary"><a href="https://manage.saasalerts.com/sign-up" target="_blank">Start free Trial</a></button>
                            </div>
                            <div className="col-sm-12 col-md-6 columns">
                                <img src="assets/img/saas_homepage_wheel_graphic.png" alt="SaaS Alerts" />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="container-xxl py-5">
                <div className="container pt-5">
                    <div className="row g-4 addcomparesec">
                        <h1>Microsoft Security Packaging Calculator for MSPs</h1>
                        <h3>Microsoft</h3>
                        <div className="col-lg-3 col-md-3 wow fadeInUp" data-wow-delay="0.1s">
                            <label>Product Line</label>
                            <select value={productline}
                                onChange={(e) => setProductLine(e.target.value)} class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option>Please Select Product Line</option>
                                <option value="1">Microsoft 365 for Business</option>
                                <option value="0">Microsoft 365 for Enterprise</option>
                                <option value="0.0">Office 365 for Enterprise</option>
                            </select>
                            {error === "2" && !productline && <span style={{ color: "red" }}>Please Select Product</span>}
                        </div>

                        <div className="col-lg-3 col-md-3 wow fadeInUp" data-wow-delay="0.1s">
                            <label>Product Plans</label>
                            <select value={productplan}
                                onChange={(e) => setProductPlan(e.target.value)} class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option>Please Select Product Plans</option>
                                <option value="22">Premium</option>
                                <option value="6">Basic</option>
                                <option value="12.50">Standard</option>
                            </select>
                            {error === "2" && !productplan && <span style={{ color: "red" }}>Please Product Plans</span>}
                        </div>
                        <div className="col-lg-3 col-md-3 wow fadeInUp" data-wow-delay="0.1s">
                            <label>Add-On Options</label>
                            <select value={addoption}
                                onChange={(e) => setAddOption(e.target.value)} class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option>Please Select Add-On Options</option>
                                <option value="0">Azure Active Directory Premium P1 (Included)</option>
                                <option value="9">Azure Active Directory Premium P2 (Add-on)</option>
                            </select>
                            {error === "2" && !addoption && <span style={{ color: "red" }}>Please Select Add-On Options</span>}
                        </div>
                        <div className="col-lg-3 col-md-3 wow fadeInUp" data-wow-delay="0.1s">
                            <label>Reseller Discount</label>
                            <select value={dPercenatge}
                                onChange={(e) => setDPercenatge(e.target.value)} class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option>Please Select Reseller Discount</option>
                                <option value="20">CSP Indirect 20%</option>
                                <option value="19">19%</option>
                                <option value="18">18%</option>
                                <option value="17">17%</option>
                                <option value="16">16%</option>
                                <option value="15">CSP Indirect 15%</option>
                                <option value="14">14%</option>
                                <option value="13">13%</option>
                                <option value="12">12%</option>
                                <option value="11">11%</option>
                                <option value="10">10%</option>
                            </select>
                            {error === "2" && !dPercenatge && <span style={{ color: "red" }}>Please Select Reseller Discount</span>}
                        </div>
                        <h3>SaaS Alert</h3>
                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <label>Saas Alert Inclusion</label>
                            <select value={alertStatus}
                                onChange={(e) => statusData(e.target.value)} class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option>Please Select Saas Alert Inclusion</option>
                                <option value="yes">Yes</option>
                                <option value="0">No</option>
                            </select>
                            {error === "2" && !alertStatus && <span style={{ color: "red" }}>Please Select Saas Alert Inclusion</span>}
                        </div>
                        {alertStatus === "yes" ?
                            <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <label>Enter Saas Alert Price $</label>
                                <input type="number" value={pricedollor} onChange={(e) => takeData(e.target.value)} class="form-control " aria-describedby="numberHelp" placeholder="Enter price" />
                                {error === "2" && !saasalert && <span style={{ color: "red" }}>Please Enter Saas Alert Price</span>}
                            </div> : ""}
                        {/* {saasalert === "2.50" ? */}
                        {/* <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <label></label>
                            <div style={{
                                border: "1px solid #0000002b",
                                height: "40px",
                                borderRadius: "6px",
                                paddingTop: "0.30rem",
                                paddingBottom: "0.25rem",
                                paddingLeft: "0.5rem",
                                fontSize: ".875rem"
                            }}>SaaS Alert Price  $3 are applied.</div>
                        </div>  */}
                        {/* : ""} */}

                        <h3>Popular Microsoft Packages</h3>
                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <label>Popular Microsoft Packages</label>
                            <select value={packagename}
                                onChange={(e) => setPackageName(e.target.value)} class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option>Please Select Popular Microsoft Packages</option>
                                <option value='Microsoft 365 for Business Standard Azure Active Directory Premium P1 (Add-on)'>Microsoft 365 for Business Standard Azure Active Directory Premium P1 (Add-on)</option>
                                <option value='Microsoft 365 for Business Premium Azure Active Directory Premium P1 (Included)'>Microsoft 365 for Business Premium Azure Active Directory Premium P1 (Included)</option>
                                <option value='Office 365 for Enterprise E1 Azure Active Directory Premium P1 (Add-on)'>Office 365 for Enterprise E1 Azure Active Directory Premium P1 (Add-on)</option>
                                <option value='Microsoft 365 for Enterprise E3 Azure Active Directory Premium P1 (Included)'>Microsoft 365 for Enterprise E3 Azure Active Directory Premium P1 (Included)</option>
                                <option value='Office 365 for Enterprise E5 Azure Active Directory Premium P1 (Add-on)'>Office 365 for Enterprise E5 Azure Active Directory Premium P1 (Add-on)</option>
                                <option value='Microsoft 365 for Enterprise E5 Azure Active Directory Premium P2 (Included)'>Microsoft 365 for Enterprise E5 Azure Active Directory Premium P2 (Included)</option>
                            </select>
                            {error === "2" && !packagename && <span style={{ color: "red" }}>Please Select Popular Microsoft Packages</span>}
                        </div>
                        <div className="col-lg-12 col-md-12 wow fadeInUp text-center" data-wow-delay="0.5s" >
                            <button class="btn btn-primary" onClick={submit}>{(productplan && productplan && addoption && dPercenatge && packagename ) ? <Link to="/package" state={{ customState: customState, percentage: dPercenatge, packagename: packagename, productline: productline, productplan: productplan, addoption: addoption, saasalert: saasalert, pricedollor: pricedollor }}>Submit</Link> : <>Submit</>}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

};

export default Home;


